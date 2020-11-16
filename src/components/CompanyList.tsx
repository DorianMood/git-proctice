import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { Company } from "../types/api";
import DataTable, { HeadCell, DataTableRow } from "./DataTable";

import * as faker from "faker";

/**
 * Mock Company here for simplicity.
 * @returns {Company}  - Generated Company.
 */
const makeCompany = (): Company => {
  return {
    id: faker.random.number(),
    projectId: faker.random.number(),
    name: faker.commerce.productName(),
    url: faker.internet.url(),
    displayUrl: {
      yandex: `yandex.${faker.internet.url().split("//")[1]}`,
      google: [
        `google1.${faker.internet.url().split("//")[1]}`,
        `google2.${faker.internet.url().split("//")[1]}`,
      ],
    },
    regions: [
      {
        id: faker.random.number(),
        name: faker.address.city(),
      },
      {
        id: faker.random.number(),
        name: faker.address.city(),
      },
    ],
    businessCards: [
      {
        id: faker.random.number(),
        name: faker.company.companyName(),
        workingHours: `10:00 - 22:00`,
        tel: faker.phone.phoneNumber(),
        about: faker.company.catchPhrase(),
        street: faker.address.streetName(),
        house: faker.random.number(100).toString(),
        city: faker.address.city(),
        country: faker.address.country(),
      },
    ],
    keys: [],
    minusKeys: [],
  };
};

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

  const companyList: Array<Company> = [
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
    makeCompany(),
  ];

  const rows: Array<DataTableRow> = companyList.map(
    (item: Company, index): DataTableRow => {
      return {
        id: index,
        data: {
          id: item.id,
          name: item.name,
          url: item.url,
          yandex: item.displayUrl.yandex,
          google1: item.displayUrl.google[0],
          google2: item.displayUrl.google[1],
          dailyBudget: 100,
          region: item.regions[0].name,
          businessCard: item.businessCards[0].id,
          ctr: 13,
        },
      };
    },
  );
  const columnNames: string[] = [
    "id",
    "name",
    "url",
    "yandex",
    "google1",
    "google2",
    "dailyBudget",
    "region",
    "businessCard",
    "ctr",
  ];

  const columns: Array<HeadCell> = columnNames.map((item) => {
    return {
      id: item,
      label: item,
      disablePadding: false,
      numeric: true,
    };
  });

  return <DataTable rows={rows} columns={columns} title="Companies" />;
}
