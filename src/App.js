import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      flats: [],
      selectedFlat: null,
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
         this.setState({
            flats: data
         })
      })
  }

  selectedFlat

  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
             })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={11}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}



export default App;
