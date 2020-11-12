import * as React from "react";
import {
  Modal,
  Button,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import "./../assets/scss/ProjectPage.scss";
import CompanyList from "./CompanyList";
import DataTable from "./DataTable";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export interface ProjectPageProps {}

export default function ProjectPage(props: ProjectPageProps) {
  const classes = useStyles();

  let [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = <div>Add company</div>;

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}
      >
        Add
      </Button>
      <CompanyList />
      <DataTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </>
  );
}
