import * as React from "react";
import {
  Modal,
  Button,
  Theme,
  makeStyles,
  createStyles,
  Container,
} from "@material-ui/core";

import ProjectList from "./ProjectList";
import ProjectNew from "./ProjectNew";
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
      border: "2px solid #fff",
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
      <ProjectNew />
    </div>
  );

  return (
    <>
    <Container style={{marginTop: 20}}>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}
      >
       Add 
      </Button>
    </Container>
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
