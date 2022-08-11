import React from 'react'
import './styles/Header.css'
import logo from "../Amazon-logo.png"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './context/StateProvider';
import {auth} from "../firebase";


function Header() {

  const [{basket, user }, dispatch] = useStateValue();

  const handleSignInAuthentication = () => {
    if (user){
        auth.signOut();
    }
  }
  
  return (
    <div className='header'>
        <Link to ="/">
            <img className="header__logo" src={logo} alt="amazon-logo"/>
        </Link>

         
        <div className='header__search'>
            <input className='header__searchInput' type="text"/> 
            <SearchIcon className="header__searchIcon"/>

        </div>
        <div className='header__nav'>
        <Link to={!user && "/login"}>
            <div onClick={handleSignInAuthentication} className = "header__option">
                <span className='header__optionLineOne'> 
                    Hello {!user ? "Guest" : user.email  }
                </span>
                
                <span className='header__optionLineTwo'>{ user ? 'Sign Out'
                : 'Sign In' }</span>
            </div>
                </Link>
            <div className = "header__option">
                <span className='header__optionLineOne'> Returns</span>
                <span className='header__optionLineTwo'> & Orders</span> 
            </div>
                
            <div className = "header__option"> 
                <span className='header__optionLineOne'> Your</span>
                <span className='header__optionLineTwo'> Prime</span>
            </div>
            {/* Basket Cart Link */}
            <Link to= "/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                    {/* number that display basket length  */}
                    {basket?.length} 
                    {/* optional chaining --> if basket becomes undefined for some reason ,it will shut the process withour throwing error */}
                    </span>
                </div>
            </Link>
            

        </div>
    </div> 
  )
}

export default Header;