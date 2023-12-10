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
import './Stepbarsearch.css';
export default class Stepbarsearch extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="stepbar">
          <div>
            
            <ButtonToolbar className="container" className="row">
            <InputGroup>
              
              <Input placeholder="" />
              
                <InputGroupAddon addonType="append" >
                  <Button color="secondary" className="searchicon"><SearchOutlinedIcon /></Button>
                </InputGroupAddon>
                
              </InputGroup>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}