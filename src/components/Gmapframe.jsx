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
import './Gmapframe.css';
export default class Gmapframe extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return (
    <div >
      <Frame className="mapframe">
      <div style={{ height: '95vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{lat: 10.99835602, lng: 77.01502627}}
            defaultZoom={11}>

          </GoogleMapReact>
          </div>
      </Frame>
    </div>
    );
  }
}