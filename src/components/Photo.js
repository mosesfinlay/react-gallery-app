import React from "react";

const Photo = ({ title, url }) => {
  return (
    <li>
      <a href={ url } >
        <img src={ url } alt="" />
      </a>
    </li>
  );
};

export default Photo;