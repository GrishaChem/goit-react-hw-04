import React from "react";
import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ small, description }) => {
  return (
    <div className={s.container}>
      <img className={s.image} src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
