// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from '../components/CheckoutForm';

// const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

// const Payment = () => {
//     const [clientSecret, setClientSecret] = useState('');

//     useEffect(() => {
//         // Fetch payment intent from backend
//         fetch('http://localhost:5000/api/payments/create-payment-intent', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ amount: 1000 }), // Amount in cents
//         })
//             .then(res => res.json())
//             .then(data => setClientSecret(data.clientSecret));
//     }, []);

//     const appearance = { theme: 'stripe' };
//     const options = { clientSecret, appearance };

//     return (
//         <div>
//             <h1>Donate</h1>
//             {clientSecret ? (
//                 <Elements options={options} stripe={stripePromise}>
//                     <CheckoutForm />
//                 </Elements>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Payment;



import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your actual Stripe Publishable Key
const stripePromise = loadStripe('pk_test_YourPublishableKey');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     setIsProcessing(true);
//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       '<Insert Client Secret Here>',
//       {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       }
//     );

//     if (error) {
//       setMessage(error.message);
//     } else if (paymentIntent && paymentIntent.status === 'succeeded') {
//       setMessage('Payment successful!');
//     }

//     setIsProcessing(false);
//   };


const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) return;
  
    setIsProcessing(true);
  
    // Fetch client secret from backend
    const response = await fetch('http://localhost:5000/api/payment/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 5000 }), // Replace with actual amount
    });
    const { clientSecret } = await response.json();
  
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
  
    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage('Payment successful!');
    }
  
    setIsProcessing(false);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
