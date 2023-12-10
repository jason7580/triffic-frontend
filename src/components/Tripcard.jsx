import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import pic from './pic.jpg';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import './Tripcard.css';
export default class Tripcard extends React.Component {
  static propTypes = {
    liked: PropTypes.bool,
    tripAuthor: PropTypes.string,
    tripName: PropTypes.string,
    tripDescription: PropTypes.string
  };
  constructor(props){
    super(props);


  }
  render(){
    PropTypes.tripAuthor = "author";
    PropTypes.liked = false;
    var Author = PropTypes.tripAuthor + "'s";
    PropTypes.tripName = "TRIP";
    PropTypes.tripDescription = "Discription bla bla";
    return (
      <div>
      <Paper className="paper">
        <Grid container spacing={2}>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography gutterBottom variant="body2">
                  {Author}
                </Typography>
                <ButtonBase>
                <Typography variant="h6" gutterBottom>
                  {PropTypes.tripName}
                </Typography>
                </ButtonBase>
                <Typography variant="caption" display="block" color="textSecondary">
                  {PropTypes.tripDescription}
                </Typography>
              </Grid>
              <br />
              <br /><br /><br />
              <Grid item>
              <IconButton onClick={this.handlefavclick} aria-label="previous">{
                PropTypes.liked ? <FavoriteIcon className="favicon" /> : <FavoriteIcon />
                }
              </IconButton>
              <IconButton aria-label="play/pause">
                <InsertCommentOutlinedIcon />
              </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            <ButtonBase className="image">
              <img className="img" alt="complex" src={pic} />
            </ButtonBase>
          </Grid>
          
        </Grid>
      </Paper>
      </div>
    );
  }


  handlefavclick(){
    //this.props.dispatch();
  }
}