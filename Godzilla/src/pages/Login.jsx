import React from 'react'
import Add from "../img/img.png"
function Login  ()  {
  return (
    <div class="form-container">
        <div class="form-wrapper">
            <span className="logo">Godzilla</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign in</button>
            </form>
            <p>Do you not have an account? Register</p>
        </div>
    </div>
  )
}
export default Login