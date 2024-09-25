import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ results, onImageClick }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {results.map((result) => (
          <li key={result.urls.small}>
            <ImageCard
              small={result.urls.small}
              description={result.description} // Поправлено results.description на result.description
              onClick={
                () => onImageClick(result.urls.regular, result.description) // Передаємо правильні дані
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
