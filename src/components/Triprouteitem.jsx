import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Box from "@material-ui/core/Box";


import './Triproute.css';


  

export default class Triproute extends React.Component {
    
    static propTypes = {
        switchvisibility: PropTypes.bool,
        destinationname: PropTypes.string,
        starttime: PropTypes.instanceOf(Date),
        duration: PropTypes.number,
        traffictime: PropTypes.number,
        lastdestination: PropTypes.bool,
        message: PropTypes.string,
        details: PropTypes.string
    };

    constructor(props){
      super(props);
    }
    render(){
      var  switchvisibility = this.props.switchvisibility ? "block" : "none";
      return (
        <div className="triproute">
            <Card variant="outlined"  >
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography  display="none" color="textSecondary" >11:30</Typography>
                            <Typography variant="h5"> &nbsp;&nbsp; taipei 101</Typography>
                            <Typography  color="textSecondary" >12:30</Typography>
                        </Grid>
                        <Grid item xs>
                            <br></br><Typography > messages </Typography>
                        </Grid>
                        <Grid item xs className="switch">
                            <Box display={switchvisibility}>
                                <Typography  color="textSecondary" >notify me</Typography>
                                <Switch edge="end"/>
                            </Box>
                        </Grid>
                    </Grid>

                    
                </CardContent>
                <CardActions>
                    <Button size="small">details...</Button>
                </CardActions>
            </Card> 
        </div>
      );
    }
  }