import React from "react";

const NotFound = ({ query }) => {
  return (
    <div className="not-found">
      <h2>No Results Found</h2>
      <p className="notfound-p"><strong>{ `"${query}"` }</strong> did not return any results. Please try again.</p>
    </div>
  );
};

export default NotFound;