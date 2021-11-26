import React from 'react'
import './Login.css'
function Login() {
    return (
        
            <div className="logincontainer">
            <form>
            <h1>SignIn</h1>
            <div>
            
                <label htmlFor="email">Email</label><br />
                <input type="email" autoComplete="off" id="email" placeholder="Enter Email Address" /><br /><br />

                <label htmlFor="password">Password</label><br />
                <input type="email" id="password" placeholder="Enter Password" /><br /><br />
            

                <button type="submit"> LOG IN</button>
                </div>

            </form>
            </div>
    )
}

export default Login
