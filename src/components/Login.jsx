import React, {useState} from 'react'
import "./styles/Login.css";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../firebase";

function Login() {
  // ----------------------NAVIGATE TO LINK HOOKS --------------------------//
  const navigate =useNavigate();

  // ----------------------REACT HOOKS --------------------------//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  // ----------------------SIGNIN USING FIREBASE AUTHENTICATION --------------------------//
  const signIn = (event) => {
            event.preventDefault();
            // signin firebase 
            auth
              .signInWithEmailAndPassword(email,password)
              .then(auth =>{
                navigate("/")
              })
              .catch(error => alert(error.message))
    }
    const register = (event) => {
            event.preventDefault();
            auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //after creating user, it comes back "then"
                console.log(auth)
                if (auth) {
                  navigate("/")
                }
            })
            .catch(error => alert(error.message))  
            
    }

  return (
    <div className="login">
    <Link to="/">
        <img className="login__logo" alt="amazon-logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"></img>
    </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail </h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={signIn} className='login__signInButton' type="submit">Sign In</button>
            </form>
            
            <p>By continuing, you agree to Amazon's clone "education purpose" Conditions of Use and Privacy Notice.</p>

            <button onClick={register} className='login__registerButton' type="submit">Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login