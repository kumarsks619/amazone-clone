import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../assets/firebase'



function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleLogin = (e) => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')   //to redirect to homepage after logging in
            })
            .catch((e) => alert(e.message))
    }


    const handleSignUp = (e) => {
        e.preventDefault()
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')   //to redirect to homepage after signning
            })
            .catch((e) => alert(e.message))
    }

    

    return (
        <div className="login">
            <Link to="/" >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon-logo"
                    className="login__logo"
                />
            </Link>

            <div className="login__formContainer">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button
                        type="submit" 
                        className="login__loginBtn"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>

                <p>
                    By signing-in, you agree to Amazon's Conditions of Use 
                    and Privacy Notice.
                </p>
                
                <p className="login__newToAmazon">New to Amazon?</p>
                <button 
                    className="login__signUpBtn"
                    onClick={handleSignUp}
                >
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
