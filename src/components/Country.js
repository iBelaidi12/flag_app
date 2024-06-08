import React from "react";

export const Country = (props) => {

  return (
    <div className="country">
      <div
        // className="flag-container"
        className="flag-container"
        style={
              {
                backgroundImage: `url(https://flagcdn.com/${props.code.toLowerCase()}.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                borderRadius: '10px 10px 0 0',
              }
        }
      >
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
