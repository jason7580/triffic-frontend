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

export default class Stepbar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="stepbar">
          <div>
            <ButtonToolbar className="container" className="row">
              <Row>
                <Col md="1"><Button href="#">
                  <KeyboardArrowLeftOutlinedIcon />
                </Button>
                </Col>
                <Col  md={{size:6, offset:2}}>
                <Progress className="progress" value={33}  />
                </Col>
                <Col md={{size:1, offset:2}}>
                <Button href="#" >
                  <KeyboardArrowRightOutlinedIcon />
                </Button>
                </Col>
              </Row>
            </ButtonToolbar>
            <ButtonToolbar className="container" className="row">
            <InputGroup>
              
              <Input placeholder="" />
              
                <InputGroupAddon addonType="append">
                  <Button color="secondary"><SearchOutlinedIcon /></Button>
                </InputGroupAddon>
                
              </InputGroup>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}