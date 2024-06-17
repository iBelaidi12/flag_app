import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../styles/About.css";
import crossedFlagsOrange from "./continents/crossed-flags-orange.svg";
import crossedFlagsBlue from "./continents/crossed-flags-blue.svg";

export const About = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={darkTheme ? "about-container dark" : "about-container light"}
    >
      <h1>
        About <strong>the app</strong>
      </h1>
      <div className="inner-container">
        <div className="hold-flag">
          <img src={darkTheme ? crossedFlagsOrange : crossedFlagsBlue} alt="" />
        </div>
        <p className="about-text">
          What if you get challenged by your friends in a{" "}
          <strong>flag context</strong> ? No worries ! Thank to this <strong>React</strong> application
          you will be able to improve your flags knowledge by revising the known ones and searching for the
          <strong> flags</strong> that still confuse you. Prepare yourself and get ready to show off while facing the strongest opponents ! <br />
          <strong>Ramy</strong> and <strong>Nada</strong> may need it for their next dual ...
        </p>
      </div>
    </div>
  );
};
