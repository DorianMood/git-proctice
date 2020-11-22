import * as React from "react";
import {
  Modal,
  Button,
  Theme,
  makeStyles,
  createStyles,
  Container,
  Box,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import "./../assets/scss/ProjectPage.scss";
import CompanyList from "./CompanyList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBar: {
      padding: "1% 2% 0% 2%",
      display: "flex",
      "& > button": {
        margin: "10px",
      },
    },
  }),
);

export interface ProjectPageProps {}

export default function ProjectPage(props: ProjectPageProps) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedBreadCrumb, setSelectedBreadCrumb] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCsvClick = () => {
    console.log("Opening CSV");
  };

  // This is just a tricky filter
  const handleBreadCrumbClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log(event.currentTarget, event.currentTarget.getAttribute('key'));
  };

  const modalBody = <div>Add company</div>;

  return (
    <>
      <Box className={classes.buttonBar} justifyContent="flex-left">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleBreadCrumbClick} data-index={0}>
            Companies
          </Link>
          <Link color="inherit" href="/" onClick={handleBreadCrumbClick} data-index={1}>
            Groups
          </Link>
          <Link color="inherit" href="/" onClick={handleBreadCrumbClick} data-index={2}>
            Advertisment
          </Link>
        </Breadcrumbs>
      </Box>
      <Box className={classes.buttonBar} justifyContent="flex-right">
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={handleOpen}
        >
          Add
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCsvClick}>
          From CSV
        </Button>
      </Box>
      <CompanyList />
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
