import * as React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import TemplateItem from "./TemplateItem";

const useStyles = makeStyles({
  root: {
    padding: "0 100px",
  }
});

export interface TemplateListProps {}

export default function TemplateList(props: TemplateListProps) {

  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.root}>
        <TemplateItem />
        <TemplateItem />
      </Box>
    </>
  );
}
