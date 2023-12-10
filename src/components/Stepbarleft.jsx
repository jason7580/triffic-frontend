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
  Progress
} from 'reactstrap';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Stepbar.css';
export default class Stepbarleft extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="stepbar">
          <div>
            
               
                <Button href="#">
                  <KeyboardArrowLeftOutlinedIcon />
                </Button>
              
            
          </div>
        </div>
      </div>
    );
  }
}