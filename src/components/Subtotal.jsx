import React from 'react';
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './context/StateProvider';
import {getBasketTotal} from "./context/reducer";
import {useNavigate} from "react-router-dom";


function Subtotal() {
  const navigate = useNavigate();  // navigate 
  const [{basket}, dispatch] = useStateValue();
  
  function alertMsg(){
    return alert("Your cart is empty!!")
  }
  return (
    
    <div className='subtotal'>
   
        <CurrencyFormat
        renderText={(value) => (
        <>
            <p>
            {/* Part of the homework */}
            Subtotal ( {basket.length} items): <strong>{value}</strong>
            {/* (item.price += item.price) */}
            </p>
            <small className="subtotal__gift">
            <input className="gift__checkbox" type="checkbox" /> This order contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}  // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />
   {/* Navigate to payment page */}
    <button  onClick={e => ((basket.length !== 0) ? navigate("/payment") : alertMsg())} >Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal