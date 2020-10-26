import * as React from "react";
import {
  Modal,
  Button,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import ProjectList from "./ProjectList";
import "./../assets/scss/ProjectsPage.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export interface ProjectPageProps {}

export default function ProjectsPage(props: ProjectPageProps) {
  const classes = useStyles();
  
  let [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Create new project</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}
      >
        Large
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {modalBody}
      </Modal>
      <ProjectList />
    </>
  );
}
