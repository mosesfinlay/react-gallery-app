import React from "react";

const Photo = ({ title, url }) => {
  return (
    <li>
      <img src={ url } alt="" />
    </li>
  );
};

export default Photo;