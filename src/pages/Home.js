import '../styles/Home.css'
import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'

export const Home = () => {
  const {darkTheme} = useContext(ThemeContext)

  return (
    <>
    {
      darkTheme ? 
      (
        <div className='home-dark'>
          <div className="greetings">
            <h1>You can find a bunch of <strong>flags</strong> here</h1>
            <h2>Take a <strong>look</strong> !</h2>
          </div>
        </div>
      ) : 
      (
        <div className='home-light'>
          <div className="greetings">
            <h1>You can find a bunch of <strong>flags</strong> here</h1>
            <h2>Take a <strong>look</strong> !</h2>
          </div>
        </div>
      )
    }
  </>
  )
}
