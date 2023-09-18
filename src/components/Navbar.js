import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'

import '../styles/Navbar.css'

export const Navbar = () => {
  const {updateTheme, darkTheme} = useContext(ThemeContext)

  let location = useLocation();
  
  return (
    <>
    {
      !darkTheme ? (
        <div className="nav-bar-container-light">
          <FontAwesomeIcon icon={faGlobe} className='website-logo dark-logo'/>
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className= {location.pathname === '/' ? 'link-light active-link' : 'link-light'} >
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className= {location.pathname === '/about' ? 'link-light active-link' : 'link-light'} >
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-button"
            testid="theme"
            onClick={() => updateTheme(!darkTheme)}
            
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </div>
      ) : (
        <div className="nav-bar-container-dark">
          <FontAwesomeIcon icon={faGlobe} className='website-logo'/>
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className={location.pathname === '/' ? 'link-dark active-link' : 'link-dark'}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={location.pathname === '/about' ? 'link-dark active-link' : 'link-dark'}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-button"
            testid="theme"
            onClick={() => updateTheme(!darkTheme)}
            
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </div>
      )
    }
  </>
  )
}

