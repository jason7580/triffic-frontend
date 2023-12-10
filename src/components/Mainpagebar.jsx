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

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Mainpagebar.css';
export default class Mainpagebar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="stepbar">
          <div >
            <ButtonToolbar className="container" className="row">
              <Row>
                <Col xs="2"><Button className="btn" color="primary" href="#"><Row><Col xs="2">
                  <AddRoundedIcon className="plusicon"/></Col><Col xs={{size:10}}>NEW TRIP</Col></Row>
                </Button>
                </Col>
                <Col  xs={{size:2, offset:4}}>
                
                <FormControl className="sort" >
                <InputLabel id="demo-simple-select-label">Sort by...</InputLabel>
                <Select
                
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={this.handleChangeSorting}
                >
                  <MenuItem value="AtoZ">A-Z</MenuItem>
                  <MenuItem value="ZtoA">Z-A</MenuItem>
                  <MenuItem value="newtoold">new-old</MenuItem>
                  <MenuItem value="oldtonew">old-new</MenuItem>
                </Select>
                </FormControl>
                </Col>
                <Col className="inputbar" xs={{size:4}}>
                <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="search your trip"
                  bsSize="sm"
                  onChange={this.handleSearchChange}
                />
                </FormGroup>
                </Col>
              </Row>
            </ButtonToolbar>
            <ButtonToolbar className="container" className="row">
            
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }

  handleChangeSorting(){}


  handleSearchChange(e){}
}