import React from "react";

const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div>
      <button onClick={handleChangePage}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
