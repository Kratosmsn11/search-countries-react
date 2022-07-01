import React, { Component } from 'react';
import logo from './logo.png';
import { Grid, Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <Grid container alignItems="flex-start" 
        justifyContent='flex-start'
        direction='row'>
        <Grid item xs={3} style={{
          marginTop: "10px"
        }}>
          <img src={logo} 
          style={{ 
            height: '30%',
            width: '30%'
           }}/>
        </Grid>
        <Grid item xs={3} style={{
          marginTop: "55px"
        }}>
          <Typography variant='h4'> Welcome</Typography>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default Header