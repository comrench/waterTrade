import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, name, amount) {
  return { id, name, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const item = props.tableData;
  // console.log(data);
  const rows = [
    createData("0", item[0][0], item[0][1]),
    createData("1", item[1][0], item[1][1]),
    createData("2", item[2][0], item[2][1]),
    createData("4", item[3][0], item[3][1]),
    createData("5", item[4][0], item[4][1]),
  ];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title></Title>
      <Table size="small">
        {/* <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more details
        </Link> */}
      </div>
    </React.Fragment>
  );
}
