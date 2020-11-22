import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import WhatshotIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
);

export interface CreateCompanyStateBarProps {
  current: number;
}

export default function CreateCompanyStateBar(
  props: CreateCompanyStateBarProps,
) {
  const classes = useStyles();

  const { current } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Material-UI
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Core
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Breadcrumb
      </Typography>
    </Breadcrumbs>
  );
}
