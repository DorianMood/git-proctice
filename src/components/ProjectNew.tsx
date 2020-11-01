import * as React from "react";

import { Project } from "./../types/api";
import {
  Typography,
  TextField,
  makeStyles,
  Theme,
  createStyles,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: 0, //theme.spacing(1),
    },
  }),
);

interface ProjectNewProps {}

export default function ProjectNew(props: ProjectNewProps) {
  
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div>
        <Typography variant="h5">Новый проект</Typography>
      </div>
      <div>
        <TextField id="outlined-basic" label="Название" variant="outlined" fullWidth />
      </div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </form>
  );
}
