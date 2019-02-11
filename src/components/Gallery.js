import React from "react";

import Photo from "./Photo";

const Gallery = ({ history, match, changeQuery, photos }) => {
  const results = photos.map(photo => <Photo key={ photo.id } url={ photo.url } />);
  
  return (
    <div className="photo-container">
      <h2>Results for <strong>{ `"${match.params.query}"` }</strong></h2>
      
      <ul>
        { results }
      </ul>
    </div>
  );
};

export default Gallery;