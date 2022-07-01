import { Grid, MenuItem, Select, InputLabel, Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'

import { useQuery, gql, useLazyQuery } from "@apollo/client";

const QUERY_ALL_COUNTRIES = gql`
    query GetAllCountries{
      countries{
        code
        name
        emoji
        capital
        currency
        languages{
          name
        }
      }
    }
`

class DropDown extends Component {

state = {
  countriesList: null,
  selectedCountry: "",
  dataArray:"",
  mappedCountry:[]
}

componentDidMount = () => {
  this.fetchApi()
}

fetchApi = async () => {
  const response = await this.props.client.query({
    query: QUERY_ALL_COUNTRIES
  });

  this.setState ({
    countriesList: response.data.countries
  })
}


handleOption = (e) => {
  let selectedCountryHandler = e.target.value
  let selectedCountryArr = this.state.countriesList.map((e)=>{
    if(e.code.includes(selectedCountryHandler)){
      // let selectedCnt = e
      let selectedArr = []
      selectedArr.push(e)
      if(this.state.mappedCountry.length){
        for(let i in this.state.mappedCountry){
          selectedArr.push(this.state.mappedCountry[i])
        }
      }
      this.setState({mappedCountry:selectedArr})
    }
  })
  this.setState({selectedCountry: selectedCountryHandler })
}

sendToDataTable = (e) => {
  this.setState({dataArray:e.target.value})
  this.props.sendToFunc(this.state.mappedCountry)
}

clearToDataTable = (e) => {
  this.setState({mappedCountry:[]}, () => {
     this.props.sendToFunc(this.state.mappedCountry)
  })
  
}
  render() {
    const {countriesList, selectedCountry} = this.state
  
    return (
      <div>
        <Grid container
        alignItems='flex-start'   
        justifyContent='flex-start'
        style={{
            marginTop:"10px",
            marginBottom:"10px",
            marginLeft: "20px",
            marginRight: "20px"
    }}>
            <Grid item xs = {4} md={3} style={{
                marginTop: "20px",
                height: "50px",
                width: "50px"
                }}>
                <Typography varient="h2"> Country </Typography>
            </Grid>
            <Grid item xs={4}  md={3} align="flex-start" style={{
                height: "50px",
                width:"200px"
            }}>
                <Select value={selectedCountry}
                labelId="demo-country-label"
                id="demo-country-select"
                color='primary'
                onChange={this.handleOption}
                style={{
                  height: "50px",
                  width:"200px"
                }}>
                  { countriesList && countriesList.map( (country) => {
                    return (<MenuItem key={country.code} value={country.code}>{country.emoji}{country.name}</MenuItem>)
                  })}
                 
                </Select>
            </Grid>
            <Grid item xs = {4} md={3} style={{
                padding: "10px",
                marginTop: "10px",
                height: "40px",
                width:"40px"
                }}>
                <Button variant='contained' 
                color='primary'
                onClick={this.sendToDataTable}
                > Add </Button>
            </Grid>
            <Grid item xs = {4} md={3} style={{
                padding: "10px",
                marginTop: "10px"
                }}>
                <Button variant='contained' 
                color='primary'
                onClick={this.clearToDataTable}
                > Clear </Button>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default DropDown