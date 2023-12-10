import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Paper,Grid,Box} from '@material-ui/core';
import Gmapdirection from '@components/Gmapdirection'
import Todolistitem from '@components/Todolistitem'
import Triprouteutem from '@components/Triprouteutem'

import './Tripresult.css'

export default class Tripresult extends React.Component {
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
  
        <div className="tripresult" style={{margin: 20 }}>
           <Grid container spacing={3} >
                <Grid item className="map" xs>
                  <Box>
                    <h1 p={1}>Your Trip</h1>
                  </Box>
                  <Box m={1} mt={5} border={3} borderColor="#2699fb">
                  <Gmapdirection  maporigin={maporigin} mapdestination={mapdestination} maptravelmode={maptravelmode} mapwaypoints={mapwaypoints}  mapoptimizeWaypoints={ mapoptimizeWaypoints} />
                  </Box>
                </Grid>
                <Grid item  className="route" xs>
                    <Triprouteitem switchvisibility="false" destinationname="Taipei 101"  duration={90} traffictime={30}  lastdestination={false} message="hello" details="no detail qq" />
                </Grid>
                <Grid item  className="todo" xs>
                    <Todolistitem/>
                </Grid>
            </Grid>               
        </div>
      );
    }
  }