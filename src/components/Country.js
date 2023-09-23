import React from "react";


//GB


export const Country = (props) => {
  const special = [
    "BW",
    "UY",
    "MK",
    "BL",
    "PG",
    "BV",
    "PK",
    "ER",
    "GL",
    "GR",
    "MM",
    "MO",
    "RE",
    "MT",
    "SO",
    "MH",
    "RS",
    "VN", "IS",
    "SG", "CL", "TO", "ZA", "CW", "MW", "US", "GM", "NO", "KE", "BB", "IQ", "TN", "TL", "KW", "TR",
    "IT", "DK", "BQ", "JO", "MY", "IN", "SK", "PA", "CF", "BS", "SC", "GW", "AE", "SE", "WS",
    "PL", "NL", "FI", "AU", "KP", "RW", "BY", "RU", "", "VE", "CM", "LS", "LR", "PH", "GQ", "RO", "NU",
    "CU", "SI", "AW", "ZM", "MA", "", "BY", "RU", "", "VE", "CM", "LS", "LR", "PH", "GQ", "RO", "NU"
  ];
  const isSpecial = (code) => {
    return special.includes(code) ? true : false;
  };

  const getClass = (code) => {
    if(code==="CH")
      return "flag-container ch"
    if(code==="CA")
      return "flag-container ca"
    if(code==="BR")
      return "flag-container br"
    if(code==="NG")
      return "flag-container ng"
    if(code==="KR")
      return "flag-container kr"
    else
      return "flag-container"

  }

  return (
    <div className={!isSpecial(props.code) ? "country" : "country special"}>
      <div
        // className="flag-container"
        className={getClass(props.code)}
        style={
          isSpecial(props.code)
            ? {
                backgroundImage: `url(https://flagcdn.com/${props.code.toLowerCase()}.svg)`,
              }
            : {}
        }
      >
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
