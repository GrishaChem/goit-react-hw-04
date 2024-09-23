import React from "react";

const ImageCard = ({ small, description }) => {
  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
