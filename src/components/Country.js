import React from "react";

export const Country = (props) => {
  return (
    <div className="country">
      <div className="flag-container">
        <img
          src={`https://flagcdn.com/${props.code.toLowerCase()}.svg`}
          width="30"
          alt={props.name}
          className="flag-img"
        />
      </div>
      <div className="code">
        <h2>{props.code}</h2>
      </div>
      <div className="name">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};
