import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import {gmapkey} from '@api/key.js'

import './Gmapdirection.css';

import { Paper } from '@material-ui/core';

export default class Gmapdirection extends React.Component {
    static propTypes = {
        mapzoom: PropTypes.number,
        mapcenter: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)]),
        maporigin: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)]),
        mapdestination: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)]),
        maptravelmode: PropTypes.oneOf(["BICYCLING","DRIVING","TRANSIT","WALKING"]),
        mapwaypoints: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)])
          ),
        mapoptimizeWaypoints:PropTypes.bool
    };

  constructor(props){
    super(props);
    this.state = {
        center: {lat: 25.045908383928673, lng: 121.55357062642183},//{lat: 19.434940, lng: -99.195697},
        zoom:13,
      }
  }

   render() {
    //const mapzoom, mapcenter;
    //const {maporigin,mapdestination,maptravelmode,mapwaypoints,mapoptimizeWaypoints} = this.props;
    
    
    const apiIsLoaded = (map,maps) => {
        const directionsService = new maps.DirectionsService();
        const directionsRenderer = new maps.DirectionsRenderer();
        directionsService.route({
          origin: this.props.maporigin,
          destination: this.props.mapdestination,
          travelMode:  this.props.maptravelmode,
          waypoints: this.props.mapwaypoints,
          optimizeWaypoints: this.props.mapoptimizeWaypoints
        }, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
            console.log(response.routes[0].overview_path, 'Ruta');
            console.table(response.routes[0].legs)
            directionsRenderer.setMap(map);
          } else {
            window.alert('Directions request failed due to ' + status);
            }
          });
       }

    return (
        <div className = "gmapdirection">
         
            <div style={{ height: '80vh', width: '100%' }}>
              <GoogleMapReact
                  bootstrapURLKeys={{ key: gmapkey }}
                  defaultCenter={this.state.center}
                  //center={this.props.mapcenter}
                  defaultZoom={this.state.zoom}
                  //zoom={this.props.mapzoom}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={ this.setMap }
                  onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
              >                  
              </GoogleMapReact>
            </div>
           
       </div>
       )
   }
}