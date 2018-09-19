import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDg5y82_ZaWObvFIwt6jnWeieVguKQ918&callback=initMap'
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 44.625873, lng: -91.965471 },
      zoom: 10
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
