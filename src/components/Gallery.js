import React, { Component } from "react";

import Photo from "./Photo";
import NotFound from "./NotFound";

class Gallery extends Component {
  componentDidUpdate() {
    const { loading, performSearch, match } = this.props;
    
    performSearch(match.params.query);
    console.log(loading)
  }

  render() {
    const { photos, match } = this.props;
    let results = photos.map(photo => <Photo key={ photo.id } url={ photo.url } />);
    
    const success = ( 
      <h2 className="results">
        Results for <strong>{ `"${match.params.query}"` }</strong>
      </h2>
    );
    const failed = ( 
      <NotFound query={ match.params.query } />
    );

    return (
      <div className="photo-container">
        { results.length > 0 ? success : failed }

        <ul>
          { results }
        </ul>
      </div>
    );
  }
}

export default Gallery;