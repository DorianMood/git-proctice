import * as React from "react";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TablePagination,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

import { Company } from "../types/api";

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    margin: "0 20px",
    maxWidth: "97%"
  }
}));

export interface CompanyListProps {}

export default function CompanyList(props: CompanyListProps) {

  const classes = useStyles();

  let x: Array<Company> = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
  ];
  
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Url</TableCell>
              <TableCell>Yandex</TableCell>
              <TableCell>Google 1</TableCell>
              <TableCell>Google 2</TableCell>
              <TableCell>Daily budget</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Business card</TableCell>
              <TableCell>CTR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Company 1</TableCell>
              <TableCell>company.com</TableCell>
              <TableCell>yandex.company.com</TableCell>
              <TableCell>google1.company.com</TableCell>
              <TableCell>google2.company.com</TableCell>
              <TableCell>100$</TableCell>
              <TableCell>EKB</TableCell>
              <TableCell>link to business card</TableCell>
              <TableCell>13</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={15}
        rowsPerPage={5}
        page={0}
        onChangePage={() => { console.log("change page") }}
        onChangeRowsPerPage={ () => { console.log("change rows per page") } }
      />
    </>
  );
}
