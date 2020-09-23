import React from "react";

function CardAddress({ img, title, className = "" }) {
  return (
    <div className={`home__row--col-address ${className}`}>
      <div className="home__row--col-address__image">
        <img src={img} />
      </div>
      <h2 className="home__row--col-address__title">{title}</h2>
    </div>
  );
}

export default CardAddress;
