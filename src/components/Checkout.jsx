import React, {forwardRef} from 'react'
import "./styles/Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "./context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (

    
    <div className="checkout">
        <div className='checkout__left'>
            <img className='checkout__ad' alt="ad-pic" 
               src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Aug_22/Aug-ART/GW-editorial_1150x323._CB630786187_.jpg" />
              <div>
              <h3>{user?.email}</h3>
                <h2 className="checkout__title"> Your Shopping Basket</h2>
                <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
                  {basket.map((item) => (                  
                    <CheckoutProduct 
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                    />                 
                  ))}
                </FlipMove >
                

              </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
    </div>
  )
}

export default Checkout