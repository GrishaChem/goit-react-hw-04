import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ results }) => {
  return (
    <div>
      <ul>
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
