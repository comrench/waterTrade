/* eslint-disable no-use-before-define */
import React from "react";
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getDashboard } from "../../actions";

export const Search = (props) => {
  const [value, setValue] = React.useState("");
  console.log(value);
  const onSearchChange = newValue => {
    // e.preventDefault();
    console.log('value has been changed '+newValue);
    props.getStockDetails({symbol: newValue});
  }
  return (
    <div style={{ width: 300, paddingBottom: 20 }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onSearchChange(newValue);
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = ({dashboard}) => {
  return {dashStockData: dashboard.stockInfo}
}

const mapDispatchToProps = {
  getStockDetails: getDashboard
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "AAPL", year: 1994 },
  { title: "MSFT", year: 1972 },
  { title: "AMZN", year: 1974 },
  { title: "ZM", year: 2008 },
  { title: "NVDA", year: 1957 },
  { title: "ETSY", year: 1993 },
  { title: "FB", year: 1994 },
];
