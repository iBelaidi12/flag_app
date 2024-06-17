import "../styles/Home.css";
import React, { useEffect } from "react";
import { ThemeContext } from "../App";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Country } from "../components/Country";
import all_countries from '../all_countries.json'
import africa from './continents/africa.png' 
import europe from './continents/europe.png' 
import asia from './continents/asia.png' 
import north_am from './continents/north-am.png' 
import south_am from './continents/south-am.png' 
import australia from './continents/australia.png' 


let nonTolerated = [
  "IL",
  "IO",
  "BL",
  "PG",
  "HM",
  "TV",
  "LC",
  "FM",
  "GP",
  "GE",
  "SH",
  "GG",
  "SS",
  "PN",
  "UM",
  "HN",
  "JM",
  "NE",
  "MP",
  "AG",
  "TJ",
  "VA",
  "GU",
  "DM",
  "ST",
  "CG",
  "TC",
  "CC",
  "SB",
  "AX",
  "GI",
  "MR",
  "ZW",
  "BA",
  "TZ",
  "FO",
  "VI",
  "PM",
  "SJ",
  "IO",
  "IL",
  "IO",
  "MQ",
  "NA",
  "WF",
  "KN",
  "MK",
  "NP",
  "VC",
  "GB",
  "CX",
];
const isTolerated = (code) => {
  return !nonTolerated.includes(code) ? true : false;
};

export const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  let [inputCountry, setInputCountry] = useState("");
  let [dataFiltred, setDataFiltred] = useState([]);
  let [isActive, setIsActive] = useState(false)
  let [continent, setContinent] = useState("")

  useEffect(() => {
    if(all_countries){
      var dataSorted = [...all_countries].sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      }
      if(inputCountry == "" &&  continent == ""){
        //no input yet
        setDataFiltred(dataSorted);
      }
      else if(continent != ""){
        //when deleting the search bar and a continent is set 
        dataSorted = [...dataSorted].filter((country) => 
          country.continents.includes(continent)
        )
        setDataFiltred([...dataSorted].filter((country) => 
          country.name.common.toLowerCase().startsWith(inputCountry.toLowerCase())
        ))
      }
      else{
        //when deleting the search bar and a continent is NOT set 
        setDataFiltred([...dataSorted].filter((country) => 
          country.name.common.toLowerCase().startsWith(inputCountry.toLowerCase())
      ))
      }
  }, [inputCountry, all_countries])

  useEffect(() => {
    var dataSorted = [...all_countries].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });
    
    if(continent == ""){
      setDataFiltred([...dataSorted])
    }
    else{
      setDataFiltred([...dataSorted].filter((country) => 
        country.continents.includes(continent)
      ))
    }
    
  }, [continent])

  const closeModal = () => {
    setIsActive(false)
    document.body.classList.toggle("active")
  }

  return (
    <>
      {darkTheme ? (
        <div className="home-dark">
            <div className={isActive ? "modal active" : "modal inactive"}>
              <div onClick={() => {
                  closeModal()
              }} className="black-bg">
              </div>
              <div className="inner-container">
                <h1>Choose a <strong>continent</strong></h1>
                <h4 onClick={() => {
                  setContinent("")
                  closeModal()
                }}>Reset the filter</h4>
                <span onClick={() => {
                    closeModal()
                  }} className="close-modal">&#10005;</span>
                <div className="continents">
                  
                  <img onClick = {() => {
                    setContinent("Africa")
                    closeModal()
                  }} src={africa} alt="" className="africa" />
                  
                  <img onClick = {() => {
                    setContinent("Europe")
                    closeModal()
                  }} src={europe} alt="" className="europe" />
                  
                  <img onClick = {() => {
                    setContinent("Asia")
                    closeModal()
                  }} src={asia} alt="" className="asia" />
                  
                  <img onClick = {() => {
                    setContinent("North America")
                    closeModal()
                  }} src={north_am} alt="" className="north-am" />
                  
                  <img onClick = {() => {
                    setContinent("South America")
                    closeModal()
                  }} src={south_am} alt="" className="south-am" />
                  
                  <img onClick = {() => {
                    setContinent("Oceania")
                    closeModal()
                  }} src={australia} alt="" className="australia" />
                </div>
              </div>
            </div>
          <div className="greetings">
            <h1>
              You can find a bunch of <strong>flags</strong> here
            </h1>
            <h2>
              Take a <strong>look</strong> !
            </h2>
          </div>
          <div className="main-container">
            <div className="big-input-container">
              <div className="mini-input-container">
                <input
                  onChange={(event) => setInputCountry(event.target.value)}
                  type="text"
                  name="input-flag"
                  id="input-flag"
                  placeholder="Search for a country"
                />
                <FontAwesomeIcon onClick={() => {
                  setIsActive(true);
                  document.body.classList.toggle("active")
                }} icon={faGlobe} className='icon globe'/>
                <span className="tooltip-text">Filter countries by their continent</span>
                <FontAwesomeIcon icon={faSearch} className="icon"/>
              </div>
            </div>
            <div className="countries-container">
              {dataFiltred.map((country, key) => {
                return (
                  isTolerated(country.cca2) && (
                    <Country
                      code={country.cca2}
                      name={country.name.common}
                      key={key}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="home-light">
          <div className={isActive ? "modal active" : "modal inactive"}>
            <div onClick={() => {
                closeModal()
            }} className="black-bg">
            </div>
            <div className="inner-container">
              <h1>Choose a <strong>continent</strong></h1>
              <h4 onClick={() => {
                setContinent("")
                closeModal()
              }}>Reset the filter</h4>
              <span onClick={() => {
                  closeModal()
                }} className="close-modal">&#10005;</span>
              <div className="continents">
                
                <img onClick = {() => {
                  setContinent("Africa")
                  closeModal()
                }} src={africa} alt="" className="africa" />
                
                <img onClick = {() => {
                  setContinent("Europe")
                  closeModal()
                }} src={europe} alt="" className="europe" />
                
                <img onClick = {() => {
                  setContinent("Asia")
                  closeModal()
                }} src={asia} alt="" className="asia" />
                
                <img onClick = {() => {
                  setContinent("North America")
                  closeModal()
                }} src={north_am} alt="" className="north-am" />
                
                <img onClick = {() => {
                  setContinent("South America")
                  closeModal()
                }} src={south_am} alt="" className="south-am" />
                
                <img onClick = {() => {
                  setContinent("Oceania")
                  closeModal()
                }} src={australia} alt="" className="australia" />
              </div>
            </div>
          </div>
          <div className="greetings">
            <h1>
              You can find a bunch of <strong>flags</strong> here
            </h1>
            <h2>
              Take a <strong>look</strong> !
            </h2>
          </div>
          <div className="main-container">
            <div className="big-input-container">
              <div className="mini-input-container">
                <input
                  onChange={(event) => setInputCountry(event.target.value)}
                  type="text"
                  name="input-flag"
                  id="input-flag"
                  placeholder="Search for a country"
                />
                <FontAwesomeIcon onClick={() => {
                  setIsActive(true);
                  document.body.classList.toggle("active")
                }} icon={faGlobe} className='icon globe'/>
                <span className="tooltip-text">Filter countries by their continent</span>
                <FontAwesomeIcon icon={faSearch} className="icon" />
              </div>
            </div>
            <div className="countries-container">
              {dataFiltred.map((country, key) => {
                return (
                  isTolerated(country.cca2) && (
                    <Country
                      code={country.cca2}
                      name={country.name.common}
                      key={key}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
