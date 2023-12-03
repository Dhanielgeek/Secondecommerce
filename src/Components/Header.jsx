import React from 'react'
import './Style.css'
import Logo from '../assets/logohol.png'
import {FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className='Nav'>
          <NavLink   to="/"
  className={({ isActive }) =>
      isActive ? "active" : "inactive"
  }>Home</NavLink>
          <NavLink to="/category"
  className={({ isActive }) =>
      isActive ? "active" : "inactive"
  }>Categories</NavLink>
          <NavLink to="/cart"
  className={({ isActive }) =>
      isActive ? "active" : "inactive"
  }>Cart</NavLink>
        </div>
        <div className="toggle">
        <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
       </label>
        </div>
        <div className='Menu'>
        <FiMenu />
        </div>
      </header>
  )
}

export default Header