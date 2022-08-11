import React, {useState} from 'react'
import './styles/Payment.css';
import {useStateValue} from "./context/StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";
import {cardElement, useStripe, useElements, CardElement} from "@stripe/react-stripe-js";


function Payment() {

  const [{basket, user}, dispatch] = useStateValue();
// Hooks for stripe //
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

//  function on form submit//
  const handleSubmit = e => {
    //
  }
  const handleChange = event => {
    //listen for changes in cardElement
    // display error if any
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
        <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout" > {basket?.length} items</Link>)
            </h1>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>123 Triftstrasse</p>
                <p>Berlin Germany</p>
                <p>{user?.email}</p>
            </div>
        </div>
        
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and Delivery</h3>
            </div>
            <div className='payment__items'>
                {basket.map((item) => (
                    <CheckoutProduct id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rating={item.rating} 
                    />
                ))}
            </div>

        </div>
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
            {/* form for stripe pay card */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                </form>
            </div>
        
        </div>
        </div>
        
    </div>
  )
}

export default Payment