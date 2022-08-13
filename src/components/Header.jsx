import React from 'react'
import './styles/Header.css'
import logo from "../Amazon-logo.png"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './context/StateProvider';
import {auth} from "../firebase";


function Header() {
// --------------------------REACT HOOKS ------------------------------------//
const [{basket, user }, dispatch] = useStateValue();

// --------------------------SIGNOUT FUNCTION USING AUTH ------------------------------------//
const handleSignInAuthentication = () => {
    if (user){
        auth.signOut();
    }
}

return (
    <div className='header'>
{/* // --------------------------   AMAZON LOGO ------------------------------------// */}
        <Link to ="/">
            <img className="header__logo" src={logo} alt="amazon-logo"/>
        </Link>

{/* // --------------------------AMAZON SEARCH BAR ------------------------------------// */}
         
        <div className='header__search'>
            <input className='header__searchInput' type="text"/> 
            <SearchIcon className="header__searchIcon"/>

        </div>
{/* // --------------------------AMAZON NAV BAR ------------------------------------// */}
        <div className='header__nav'>
{/* // --------------------------LOGIN ------------------------------------// */}
        <Link to={!user && "/login"}>
            <div onClick={handleSignInAuthentication} className = "header__option">
                <span className='header__optionLineOne'> 
                    Hello {!user ? "Guest" : user.email  }
                </span>
                
                <span className='header__optionLineTwo'>{ user ? 'Sign Out'
                : 'Sign In' }</span>
            </div>
                </Link>
{/* // --------------------------ORDERS LINK ------------------------------------// */}
                <Link to="/orders">
            <div className = "header__option">
                <span className='header__optionLineOne'> Returns</span>
                <span className='header__optionLineTwo'> & Orders</span> 
            </div>
            </Link>
                
            <div className = "header__option"> 
                <span className='header__optionLineOne'> Your</span>
                <span className='header__optionLineTwo'> Prime</span>
            </div>
{/* // --------------------------BASKET LINK ------------------------------------// */}
            <Link to= "/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                    {basket?.length} 
{/* optional chaining --> if basket becomes undefined for some reason ,it will shut the process
 withouT throwing error */}
                    </span>
                </div>
            </Link>
            

        </div>
    </div> 
  )
}

export default Header;