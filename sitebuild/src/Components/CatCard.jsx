import React from "react";
import "./CatCard.css";

const CatCard = ({ image, name, description }) => {
  return (
    <div className="cat-card">
      <img src={image} alt={name} className="cat-card__image" />
      <div className="cat-card__info">
        <h2 className="cat-card__name">{name}</h2>
        <p className="cat-card__description">{description}</p>
      </div>
    </div>
  );
};

export default CatCard;
