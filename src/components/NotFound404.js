import React from "react";

const NotFound404 = () => {
  const notFoundEmojies = ["(>_<)", "(='X'=)", "(^_^)", "(≥o≤)", "\\(o_o)/"];

  return (
    <div className="not-found">
      <h1>{ notFoundEmojies[Math.floor(Math.random() * notFoundEmojies.length)] }</h1>
      <h2>Whooops, Looks like you found a page that doesn't exist.</h2>
    </div>
  );
};

export default NotFound404;