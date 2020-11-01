import * as React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 720,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GoogleAdvertisement() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>This is a header of a Google ad.</Typography>
        <Typography>site.ru</Typography>
        <Typography>Address and telephone</Typography>
        <Typography>this is a body of a Google ad. It could be a bit loger then header.</Typography>
        <Typography>Inner link 1</Typography>
        <Typography>Inner link 2</Typography>
        <Typography>+7 (800) 555 - 35 - 35</Typography>
        <Typography>10:00 - 21:00</Typography>
      </CardContent>
    </Card>
  );
}
