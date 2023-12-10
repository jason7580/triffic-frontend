import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Frame from 'react-frame-component';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Progress
} from 'reactstrap';
import PropTypes from 'prop-types';

import {gmapkey} from '@api/key.js'
import './Attractiontab.css';
export default class Attractiontab extends React.Component {
  static propTypes = {
    zoom: PropTypes.number,
    center: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)]),
    origin: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(google.maps.LatLng)]),

};
  constructor(props){
    super(props);
  }



  render(){
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
    return (
    <div >
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gmapkey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

      </GoogleMapReact>
    </div>
    </div>
    );
  }

}

