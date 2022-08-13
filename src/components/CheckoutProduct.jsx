import React, {forwardRef} from 'react'
import "./styles/CheckoutProduct.css";
import {useStateValue} from "./context/StateProvider"

// --------------------------USE FORWARD REF HOOKS TO SUPPOR ANIMATION----------------------//

const CheckoutProduct = forwardRef(({id, image, title, price, rating, hideButton}, ref) =>{

    // --------------------------REACT HOOKS----------------------//

    const [{basket}, dispatch] = useStateValue();
    
    // --------------------------REMOVE FROM BASKET----------------------//

    const removeFromBasket =() => {
        // remove item from basket
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
            
        })
    }

    return (
        <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" alt="product-img" src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title"> {title}</p>
        {/* // --------------------------ITEM FROM BASKET----------------------// */}
            <p className="checkoutProduct__price">
               <small>$</small> 
               <strong>{price}</strong> 
            </p>
            <div className="checkoutProduct__rating"> 
                { Array(rating).fill().map(()=> <p>⭐</p>)}
            </div>

        {/* // --------------------------BUTTON TO REMOVE----------------------// */}
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
  )});



export default CheckoutProduct;



// function CheckoutProduct({id, image, title, price, rating}) {
//     const [{basket}, dispatch] = useStateValue();
//     const removeFromBasket =() => {
//         // remove item from basket
//         dispatch({
//             type : "REMOVE_FROM_BASKET",
//             id : id,

//         })
//     }
//     return (
//     <div className="checkoutProduct">
//         <img className="checkoutProduct__image" alt="product-img" src={image} />

//         <div className="checkoutProduct__info">
//             <p className="checkoutProduct__title"> {title}</p>
//             <p className="checkoutProduct__price">
//                <small>$</small> 
//                <strong>{price}</strong> 
//             </p>
//             <div className="checkoutProduct__rating"> 
//                 { Array(rating).fill().map(()=> <p>⭐</p>)}
//             </div>
//             <button onClick={removeFromBasket}>Remove from Basket</button>
          
//         </div>
//     </div>
//   )
// }
