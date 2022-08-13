import React from 'react'
import { useStateValue } from './context/StateProvider';
import "./styles/Product.css";

  
// PROPS CAN BE LISTED IN {} INSTEAD
function Product({id, title, image, price, rating}) {

  // ------------------------------REACT HOOKS-------------------------------------------//
  const [state, dispatch] = useStateValue();  //STATE

  //--------------onClick Function---------------------//
  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item :{
        id:id,
        title:title,
        price:price,
        image:image,
        rating:rating,
      }
    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className="product__price"> 
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            {/* RATING MAPPED TO GET STARS RENDERED ON PAGE */}
            {Array(rating).fill().map((star) => <p>⭐</p>
            )}
            </div>
        </div>
        
        <img src={image} alt="product-img"/>
        {/* button clicked to add item to basket */}
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product