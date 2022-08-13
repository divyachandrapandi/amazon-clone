/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const stripe = require("stripe")("sk_test_51LVFQvSF5rhoBWfI3kUoXWEbwbpGagKrbtOZynI8Bm4oaT5QcebKqAJDOHy52ycDyS2l7hvkcDWdNhSPSNTv5ttx007sZebNV1")

// API
// App config
const app=express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//  API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async(request, response) => {
    const total = request.query.total;

    console.log("Payment requeste received BOOM!! for this amount >>>", total );

    const paymentIntent = await  stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    });
  // ok 201
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/challenge-37115/us-central1/api //
