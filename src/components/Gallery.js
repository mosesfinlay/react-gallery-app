import React, { Component } from "react";

import Photo from "./Photo";

class Gallery extends Component {
  componentDidUpdate() {
    const { performSearch, match } = this.props;
    
    performSearch(match.params.query);
  }

  render() {
    const { photos, match } = this.props;
    const results = photos.map(photo => <Photo key={ photo.id } url={ photo.url } />);

    return (
      <div className="photo-container">
        <h2>Results for <strong>{ `"${match.params.query}"` }</strong></h2>
        
        <ul>
          { results }
        </ul>
      </div>
    );
  }
}

export default Gallery;