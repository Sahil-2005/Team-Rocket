import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css'; // Import the CSS file for styling

const stripePromise = loadStripe('pk_test_51Ql4mCIxI5wR16xMoJbNVm1kYnP6BPckR4cVE3nYU7zCNXxJNEFXE0Sa20wfW3O48bCAJsSTv4NHt69V54EHLkBX003SqzA9dJ');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');




  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) return;
  
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
  
    try {
      const res = await fetch('http://localhost:5000/api/payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amount * 100) }), // Convert amount to cents
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setMessage(`Server error: ${data.error || 'Unknown error'}`);
        return;
      }
  
      console.log('Received from backend:', data);  // Log the response from backend
  
      const { clientSecret } = data;
  
      // Ensure clientSecret is not missing or undefined
      if (!clientSecret) {
        setMessage('Missing client secret!');
        return;
      }
  
      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
  
      if (error) {
        setMessage(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        setMessage('Payment successful!');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };
  


  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="amount">Amount (USD):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-details">Card Details:</label>
          <CardElement id="card-details" className="card-element" />
        </div>
        <button type="submit" disabled={!stripe} className="pay-button">
          Pay
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payment;

