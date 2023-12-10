import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Col,
  Button,
  Row,
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
  NavbarText
} from 'reactstrap';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css';
export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="navbar background">
        <div className="container" >
          <Row className="container" >
            <Navbar className="navbarback" expand="xs"> 
              
              <Col className="xs-1">
              <NavbarBrand href="/" className="brandcolor">
                Triffic
              </NavbarBrand></Col>
              <Nav  navbar>
            
              
              <Row className="justify-content-end">
              <Col ><IconButton  href="#">
                  <NotificationsIcon className="icons"/>
                </IconButton>
                </Col>
                <Col >
                <IconButton  href="#" >
                  <PersonIcon className="icons"/>
                </IconButton>
                </Col></Row></Nav>
            </Navbar></Row>
          </div>
        </div>
      </div>
    );
  }
}
// const NavBar = (props) => {color="#2699FB"className="text-info"
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color=#2699FB light expand="md">
//         <NavbarBrand to="/" tag={RRNavLink}>Home</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink to="/About/" tag={RRNavLink}>About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;