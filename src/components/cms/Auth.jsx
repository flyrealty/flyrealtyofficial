import React from 'react'
import './assets/index.module.css'
import Nav from './Nav'
export default function Auth() {
  return (
    <>
        <Nav /> 
        <div className='auth'>
            <div className="login-form">
                <div className="auth-field">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name='Username' placeholder='Enter Username'/>
                </div>
                <div className="auth-field">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="" />
                </div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </>
    )
}
