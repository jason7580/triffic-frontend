import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper,Grid ,Box } from '@material-ui/core';
import Gmapdirection from '@components/Gmapdirection'
import Triproute from '@components/Triproute'
import Todolistitem from "@components/Todolistitem"
import Triprouteitem from "@components/Todolistitem"
import './Trippreview.css'

export default class Trippreview extends React.Component {
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
    }
    render(){
        const maporigin = '1La Esquina 轉角酒吧',
                mapdestination = 'Book ing/東區推薦/外帶/餐酒/酒吧/餐廳/晚餐',
                maptravelmode = 'DRIVING',
                mapwaypoints = [
                {
                    location: '101大樓',
                    stopover: true,
                },
                {
                    location: '榕 Ron Xinyi',
                    stopover: true,
                }
                ],
                mapoptimizeWaypoints=true;

      return (
        <div className="trippreview">
           <Grid container spacing={2}>
                <Grid item  xs={4}>
                  <div className="map">
                    <Gmapdirection  maporigin={maporigin} mapdestination={mapdestination} maptravelmode={maptravelmode} mapwaypoints={mapwaypoints}  mapoptimizeWaypoints={ mapoptimizeWaypoints} />
                  </div>
                </Grid>
                <Grid item  className="route" xs>
                    <Triprouteitem switchvisibility="true" destinationname="Taipei 101"  duration={90} traffictime={30}  lastdestination={false} message="hello" details="no detail qq" />
                </Grid>
                
            </Grid> 
        </div>
      );
    }
  }