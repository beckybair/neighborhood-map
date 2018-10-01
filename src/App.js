import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.cords = { lat: 44.810516, lng: -91.493506 };
  }

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
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log('ERROR! ' + error);
      });
  };

  initMap = () => {
    // create a map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.cords,
      zoom: 14
    });

    // create an infowindow
    var infowindow = new window.google.maps.InfoWindow();

    // display dynamic markers
    this.state.venues.map(myVenue => {
      var contentString = `${myVenue.venue.name}`;

      // create a marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });

      // click a marker
      marker.addListener('click', function() {
        // change the content
        infowindow.setContent(contentString);

        // open infowindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <header id="title">
          <h1>Welcome to the Neighborhood Map</h1>
          <h2>This map shows Coffee shops in Eau Claire, WI</h2>
          <div>
            <button type="button" className="btn btn-info">
              Show/Hide List
            </button>
          </div>
        </header>
        <section className="row">
          <div id="list" className="col-sm-3 d-lg-block">
            <h3 className="pt-3 pl-3">List of Coffee Shops</h3>
            <div className="accordion pl-3" id="accordionList">
              <div className="card">
                <div id="listItem1" className="card-body">
                  <h5
                    className="card-title pointer"
                    data-toggle="collapse"
                    data-target="#collapseCardText"
                    aria-expanded="false"
                    aria-controls="collapseCardText"
                  >Name of place goes here
                    {/* {this.state.venues.venue} */}
                  </h5>
                  <div
                    id="collapseCardText"
                    className="collapse"
                    aria-labelledby="listItem1"
                    data-parent="#accordionList"
                  >
                    <h6 className="card-subtitle mb-2 text-muted">
                      reasons items summary - this place is awesome!
                    </h6>
                    <p className="card-text">some text goes in here - like the formattedAddress
                      {/* {this.state.venues[0].venue.formattedAddress[0]} */}
                      <br />
                      {/* {this.state.venues[0].venue.formattedAddress[1]} */}
                    </p>
                    <a href="#" className="card-link">
                      Show on map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="map" className="col" />
        </section>
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
