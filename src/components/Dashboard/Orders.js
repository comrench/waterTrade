import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,name, amount) {
  return {id,name, amount };
}

const rows = [
  createData('0','Elvis Presley', 312.44),
  createData('1','Paul McCartney', 866.99),
  createData('2','Tom Scholz', 100.81),
  createData('4','Michael Jackson', 654.39),
  createData('5','Bruce Springsteen', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
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
