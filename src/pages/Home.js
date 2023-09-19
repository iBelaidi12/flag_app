import '../styles/Home.css'
import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useQuery } from 'react-query'


const fetchCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data
}

export const Home = () => {
  const {darkTheme} = useContext(ThemeContext)
  const {data, isLoading, isError} = useQuery('countries', fetchCountries)

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
          <div className="main-container">
            <div className="big-input-container">
              <div className="mini-input-container">
                <input type="text" name="input-flag" id="input-flag"/>
                <FontAwesomeIcon icon={faSearch} className='icon'/>
              </div>
            </div>
            <div className="countries-container">
              <div className="country">
                <div className="flag">
                  <img
                    src={data[23].flags.svg}
                    width="30"
                    alt="Algeria"
                    className='flag-img'
                  />
                </div>
                <div className="code">
                  {data[23].cca2}
                </div>
                <div className="name">
                {data[23].name.common}
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
              <div className="country">
                <div className="flag">
                  img
                </div>
                <div className="code">
                  DZ
                </div>
                <div className="name">
                  Algerie
                </div>
              </div>
            </div>
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
