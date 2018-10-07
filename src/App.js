import React, { Component } from 'react';
import SquareAPI from './API/helperAPI';
import Map from './components/Map';
import List from './components/List';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  handleMarkerClick = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });

    const venue = this.state.venues.find(venue => venue.id === marker.id);
    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) });
    });
  };

  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  };

  componentDidMount() {
    SquareAPI.search({
      query: 'coffee',
      near: 'Eau Claire, WI',
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, markers, center });
    });
  }

  render() {
    return (
      <main>
        <header id="title">
          <h1>Welcome to the Neighborhood Map</h1>
          <h2>This map shows Coffee Shops in Eau Claire, WI</h2>
        </header>
        <section>
          <div className="row">
            <List {...this.state} handleListItemClick={this.handleListItemClick} />
            <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
