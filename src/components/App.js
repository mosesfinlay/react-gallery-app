import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// Stores api key
import apiKey from "../config";

// App imports
import Header from "./Header";
import Gallery from "./Gallery";
import NotFound404 from "./NotFound404";

class App extends Component {
  state = {
    loading: true,
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

  componentDidMount() {
    const pathName = window.location.pathname.replace("/", "");

    this.performSearch(pathName);
  }

  // Performs the search of photos 
  performSearch = query => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&content_type=1&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          photos: this.photoUrls(res.photos.photo)
        })
      })
      .catch(err => console.log("There was an error requesting the data.", err));
  }

  render() {
    const navigationItems = ["cats", "snow", "science", "technology", "programming", "earth", "beach", "hawaii"];

    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            {/* Redirect to /cats when you first visit the site */}
            <Route exact path="/" component={ () => <Redirect to="/cats" /> } />
            
            {/* Header & Gallery */}
            <Route exact path="/:query" component={({ history, match }) => 
              <React.Fragment>
                <Header navItems={navigationItems} history={ history } />

                {
                  (this.state.loading)
                  ? <h2>Loading...</h2>
                  : <Gallery 
                      match={ match } 
                      performSearch={ this.performSearch } 
                      photos={ this.state.photos } 
                    />
                }
              </React.Fragment>
            } />

            {/* Not Found Route */}
            <Route component={({ history }) => 
              <React.Fragment>
                <Header navItems={navigationItems} history={ history } />
                <NotFound404 />
              </React.Fragment>
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
