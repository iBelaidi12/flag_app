import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import '../styles/About.css'

export const About = () => {
  const {darkTheme} = useContext(ThemeContext);


  return (
    <div className={darkTheme ? "about-container dark" : "about-container light"}>
        <div className="inner-container">
          <h1>About the app</h1>
        </div>
    </div>
  )
}
