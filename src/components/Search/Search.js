/* eslint-disable no-use-before-define */
import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getDashboard } from "../../actions";

export const Search = (props) => {
  const [value, setValue] = React.useState("");
  const onSearchChange = (newValue) => {
    // e.preventDefault();
    console.log("value has been changed " + newValue);
    const num = StockMarket.find((item) => {
      return item.title == newValue;
    });
    props.getStockDetails({ symbol: num.symbol });
  };
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
        options={StockMarket.map((option) => option.title)}
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
};

const mapStateToProps = ({ dashboard }) => {
  return { dashStockData: dashboard.stockInfo };
};

const mapDispatchToProps = {
  getStockDetails: getDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const StockMarket = [
  { title: "AAPL", symbol: 8049 },
  { title: "MSFT", symbol: 27426 },
  { title: "AMZN", symbol: 7410 },
  { title: "ZM", symbol: 25421932 },
  { title: "NVDA", symbol: 29814 },
  { title: "ETSY", symbol: 9530962 },
  { title: "FB", symbol: 2067121 },
];
