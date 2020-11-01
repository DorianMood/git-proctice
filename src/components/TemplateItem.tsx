import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";
import GoogleAdvertisement from "./GoogleAdvertisement";

const useStyles = makeStyles({
  root: {
    margin: "10px",
    cursor: "pointer"
  },
});

export interface TemplateItemProps {}

export default function TemplateItem(props: TemplateItemProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <GoogleAdvertisement />
    </Box>
  );
}
