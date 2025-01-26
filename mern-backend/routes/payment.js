const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
const stripe = Stripe('sk_test_51Ql4mCIxI5wR16xMQUnAMiFmM6hxswBi1Uagvalbz4T4q21OKiJY2pzsn8YWXiIcUEgkBqG5EEVTKPMOpqvXwrod002fpBwCqn'); // Ensure this is your secret key

// Create a Payment Intent
router.post('/create-payment-intent', async (req, res) => {
  console.log('Request received:', req.body);  // Log request to check if amount is correctly received
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    console.log('PaymentIntent created:', paymentIntent.client_secret);  // Log clientSecret
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
