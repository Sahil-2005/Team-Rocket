const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

// Replace with your actual Stripe secret key
// const stripe = new Stripe('sk_test_YourSecretKey');
const stripe = new Stripe('sk_test_51Ql4mCIxI5wR16xMQUnAMiFmM6hxswBi1Uagvalbz4T4q21OKiJY2pzsn8YWXiIcUEgkBqG5EEVTKPMOpqvXwrod002fpBwCqn');

// Create a Payment Intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
