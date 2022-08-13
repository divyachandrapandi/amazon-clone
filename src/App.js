import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from './components/Header';
import Home  from './components/Home';
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./firebase";
import {useStateValue} from "./components/context/StateProvider.js"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from  "@stripe/react-stripe-js";

// -----------------------LOAD STRIPE WITH PUBLIC_KEY--------------------------------//
const promise = loadStripe("pk_test_51LVFQvSF5rhoBWfIxp1Z7KSuuV4MsHltB8ztHuk08DKn4RfWiLswptVDdzTOAvUyHHBABAs6dibDdkjouS2Iz3rj00fMJMkabd" );


function App() {
  // --------------------------------REACT HOOKS--------------------------------//
  const [{}, dispatch] = useStateValue();
  
  
  // --------------------------------USEEFFECT REACT HOOKS--------------------------------//
  useEffect (() => {
    // will run only once when app componenet loads
    auth.onAuthStateChanged(authUser => {

      console.log("this is user " + authUser);

      if (authUser){
        // the user just logged in /the user was logged in even after refresh
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
  }, [])
  return (
    //  BEM
    <Router >
      <div className="App">
      
        <Routes>
        <Route exact path ="/login"
        element={<Login />}/ >
          
        <Route exact path="/checkout" 
              element={<><Header /><Checkout /></> } />
        <Route exact path="/payment" 
              element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </> } />
        
      
        <Route exact path="/orders" element={ <><Header /><Orders/></>} />
        <Route exact path="/" element={ <><Header /><Home/> </>} />
        </Routes>     
      </div>
    </Router>
    
  );
}

export default App;
