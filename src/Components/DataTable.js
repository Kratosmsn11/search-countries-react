import React, { Component } from "react";
import imgSrc from "../assets/monkey.gif";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";

class DataTable extends Component {
  render() {
    const dataSet = this.props.dataSet;

    return (
      <div>
        {dataSet.length > 0 ? (
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              item
              xs={10}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <TableContainer component={Paper}>
                <Table
                  stickyHeader
                  sx={{ minWidth: 650 }}
                  aria-label="scountry-data-table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Flag</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Capital</TableCell>
                      <TableCell align="center">Language</TableCell>
                      <TableCell align="center">Currency</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* map of list of countries from state */}
                    {dataSet.length > 0 &&
                      dataSet.map((data) => {
                        return (
                          <TableRow key={data.emoji}>
                            <TableCell align="center">{data.emoji}</TableCell>
                            <TableCell align="center">{data.name}</TableCell>
                            <TableCell align="center">{data.capital}</TableCell>
                            <TableCell align="center">
                              {data.languages[0].name}
                            </TableCell>
                            <TableCell align="center">
                              {data.currency}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={12} align="center">
              <img src={imgSrc} />
              <Grid item xs={12} align="center">
                <Typography variant="h4"> Select a country now!</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default DataTable;
