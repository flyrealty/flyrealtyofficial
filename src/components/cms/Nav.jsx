import React from 'react'
import './assets/index.module.css'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='cms-nav'>
      <div className="cms-nav-wrapper">
        <div className="cms-logo">
            <img src="" alt="" />
        </div>
        <div className="cms-nav-links">
            <Link>Home</Link>
            <Link>Logout</Link>
        </div>
      </div>s
    </div>
  )
}
