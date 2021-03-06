import React from "react";

function Dot({ img, title, className = "" }) {
  return (
    <div className={`home__row--col-address ${className}`}>
      <div className="home__row--col-address__image">
        <img src={img} alt="img"/>
      </div>
      <h2 className="home__row--col-address__title">{title}</h2>
    </div>
  );
}

export default Dot;
