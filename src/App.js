import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    venues: []
  };

  componentDidMount() {
    this.getVenues();
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDg5y82_ZaWObvFIwt6jnWeieVguKQ918&callback=initMap'
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const params = {
      client_id: 'FBDOAW2LIHLOKKUKCMGRODTGGJJ5H1T0TAAB2O520QD3DFPT',
      client_secret: 'G2RDP3M0FWMKRPI353IVW3SILWKWTLZYD451RX3ADO411D3C',
      query: 'coffee',
      near: 'Eau Claire, WI',
      v: '20180323'
    };

    axios
      .get(endPoint + new URLSearchParams(params))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap());
      })
      .catch(error => {
        console.log('ERROR! ' + error);
      });
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 44.810516, lng: -91.493506 },
      zoom: 10
    });

    this.state.venues.map(myVenue => {
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
