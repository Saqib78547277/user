import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className="container">
            <div>
            <form>
            <h1>SignIn</h1>
            
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" placeholder="Enter Email Address" /><br /><br />

                <label htmlFor="password">Password</label><br />
                <input type="email" id="password" placeholder="Enter Password" /><br /><br />
            

                <button type="submit"> LOG IN</button>

            </form>
            </div>
        </div>
    )
}

export default Login
