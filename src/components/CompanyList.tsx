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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      margin: "0 20px",
      maxWidth: "97%",
    },
  }),
);

export interface CompanyListProps {}

export default function CompanyList(props: CompanyListProps) {
  const classes = useStyles();

  let companyList: Array<Company> = [
    {
      id: 1,
      projectId: 1,
      name: "Company 1",
      url: "company1.com",
      displayUrl: {
        yandex: "yandex.company1.com",
        google: ["google1.company1.com", "google2.company1.com"],
      },
      regions: [
        {
          id: 1,
          name: "EKB",
        },
        {
          id: 2,
          name: "CHL",
        },
      ],
      businessCards: [
        {
          id: 1,
          name: "card name",
          workingHours: "10:00 - 21:00",
          tel: "88005553535",
          about: "This is a company business card",
          street: "Gotvalda",
          house: "11",
          city: "Yekaterinburg",
          country: "Russia",
        },
      ],
      keys: [],
      minusKeys: [],
    },
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
            {companyList.map((item, index) => (
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.url}</TableCell>
                <TableCell>{item.displayUrl.yandex}</TableCell>
                <TableCell>{item.displayUrl.google[0]}</TableCell>
                <TableCell>{item.displayUrl.google[1]}</TableCell>
                <TableCell>100$</TableCell>
                <TableCell>{item.regions[0].name}</TableCell>
                <TableCell>{item.businessCards[0].id}</TableCell>
                <TableCell>13</TableCell>
              </TableRow>
            ))}
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
        onChangePage={() => {
          console.log("change page");
        }}
        onChangeRowsPerPage={() => {
          console.log("change rows per page");
        }}
      />
    </>
  );
}
