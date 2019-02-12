import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// Stores api key
import apiKey from "../config";

// App imports
import Header from "./Header";
import Gallery from "./Gallery";

class App extends Component {
  state = {
    photos: []
  };

  /* 
    Returns an array of all the photos 
    with each photo's url and id: 
     
    [{ url: "{URL}", id: {NUMBER} }] */
  photoUrls = photos => {
    let photoContent = [];

    photos.forEach((photo, index) => {
      // Variables for the photo url 
      const farmId = photo.farm;
      const serverId = photo.server;
      const id = photo.id;
      const secret = photo.secret;
      const photoURL = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;

      photoContent.push({
        url: photoURL,
        id: index
      });
    });

    return photoContent;
  }

  // Performs the search of photos 
  performSearch = query => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&content_type=1&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(res => {
        const photos = { photos: this.photoUrls(res.photos.photo) };
        this.setState(photos);
      })
      .catch(err => console.log("There was an error requesting the data.", err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Redirect to /cats when you first visit the site */}
          <Route exact path="/" component={ () => <Redirect to="/cats" /> } />
          
          <Route path="/:query" component={({ history }) => <Header navItems={["cats", "snow", "science", "technology", "programming", "earth", "beach", "hawaii", "lava"]} history={ history } /> } />
          <Route path="/:query" component={ ({ match }) => {
            return ( <Gallery match={ match } performSearch={ this.performSearch } photos={ this.state.photos } /> );
          }} />

          {/* Todo: Not Found Route Here */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
