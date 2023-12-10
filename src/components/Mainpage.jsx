import React, { useState } from 'react';
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
  Progress,
  FormGroup,
  Label
} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Mainpagebar from '@components/Mainpagebar'
import Tripcard from '@components/Tripcard'
export default class Mainpage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){

    return (
      <div className="container">
        <Mainpagebar />
        <Row className="container">
          <Col xs="6" className="cards">
            <Tripcard />
          </Col> 
          <Col xs="6" className="cards">
            <Tripcard />
          </Col>
          <Col xs="6" className="cards">
            <Tripcard />
          </Col>
        </Row>
        
        
        
      </div>
    );
  }
}

