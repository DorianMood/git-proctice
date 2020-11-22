import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import CreateCompanyStateBar from "./CreateCompanyStateBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);

export interface CreateCompanyPageProps {}

export default function CreateCompanyPage(props: CreateCompanyPageProps) {
  const classes = useStyles();

  return (
    <>
      <CreateCompanyStateBar current={0} />
    </>
  );
}
