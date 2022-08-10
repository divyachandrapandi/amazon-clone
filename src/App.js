import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from './components/Header';
import Home  from './components/Home';
import Checkout from "./components/Checkout";
import { auth } from "./firebase";
import {useStateValue} from "./components/context/StateProvider.js"


function App() {
  const [{}, dispatch] = useStateValue();
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
        
      
        <Route exact path="/" element={ <><Header /><Home/> </>} />
        </Routes>     
      </div>
    </Router>
    
  );
}

export default App;
