import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { Company } from "../types/api";
import DataTable, { HeadCell, DataTableRow } from "./DataTable";

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

  const columns: Array<HeadCell> = [
    {
      id: "id",
      label: "Ticker",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "name",
      label: "name",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "url",
      label: "url",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "yandex",
      label: "yandex",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "google1",
      label: "google1",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "google2",
      label: "google2",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "dailyBudget",
      label: "Daily budget",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "region",
      label: "region",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "BusinessCard",
      label: "Business card",
      disablePadding: false,
      numeric: true,
    },
    {
      id: "ctr",
      label: "ctr",
      disablePadding: false,
      numeric: true,
    },
  ];

  const companyList: Array<Company> = [
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
    {
      id: 2,
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
    },    {
      id: 3,
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

  return <DataTable rows={rows} columns={columns} title="Companies" />;
}
