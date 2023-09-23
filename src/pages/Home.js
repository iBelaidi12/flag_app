import '../styles/Home.css'
import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Country } from '../components/Country'


const fetchCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data
}

let nonTolerated = [
  "IL", "IO", "BL", "PG", "HM", "TV", "LC", "FM", "GP", "GE", "SH", "GG", "SS", "PN",
  "UM", "HN", "JM", "NE", "MP", "AG", "TJ", "VA", "GU", "DM", "ST", "CG", "TC", "CC",
  "SB", "AX", "GI", "MR", "ZW", "BA", "TZ", "FO", "VI", "PM", "SJ", "IO", "IL", "IO", "MQ",
  "NA", "WF", "KN", "MK", "NP", "VC", "GB"
]
const isTolerated = (code) => {
  return !nonTolerated.includes(code) ? true : false
}

export const Home = () => {
  const {darkTheme} = useContext(ThemeContext)
  const {data, isLoading, isError} = useQuery('countries', fetchCountries)

  //Sorting the data
  if(!isLoading){
    var dataSorted = [...data].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    })

  }

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
            {
              !isLoading && (
                <div className="countries-container">
                  {
                    dataSorted.map((country, key) => {
                      return isTolerated(country.cca2) && <Country code={country.cca2} name={country.name.common} key={key} />
                  })}
                </div>
              )
            }
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
