import React from "react";

const StarRating = () => {
  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{ width: "70%" }}></div>
    </div>
  );
};

export default StarRating;
