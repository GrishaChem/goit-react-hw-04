import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ results }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {results.map((result) => (
          <li key={result.urls.small}>
            <ImageCard
              small={result.urls.small}
              description={results.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
