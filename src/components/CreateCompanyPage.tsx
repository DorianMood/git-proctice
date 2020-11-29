import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Box,
} from "@material-ui/core";
import CreateCompanyStateBar from "./CreateCompanyStateBar";
import { CreateCompanyForm1, CreateCompanyForm2, CreateCompanyForm3, CreateCompanyForm4 } from "./CreateCompanyForms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      margin: "10px 30px",
    },
  }),
);

export interface CreateCompanyPageProps {}

const steps: string[] = [
  "Start",
  "Semantics and auditory",
  "Grouping",
  "Ads creation",
  "Export",
];

export default function CreateCompanyPage(props: CreateCompanyPageProps) {
  const classes = useStyles();

  const [currentStep, setCurrentStep] = React.useState(0);

  const onNextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, steps.length));
  };

  const onBackStep = () => {
    setCurrentStep(Math.max(currentStep - 1, -1));
  };

  let currentForm = <CreateCompanyForm1 />;

  switch (currentStep) {
    case 1:
      currentForm = <CreateCompanyForm1 />;
    case 2:
      currentForm = <CreateCompanyForm2 />;
    case 3:
      currentForm = <CreateCompanyForm3 />;
    case 4:
      currentForm = <CreateCompanyForm4 />;
  }

  return (
    <>
      <CreateCompanyStateBar current={currentStep} steps={steps} />
      <Box className={classes.form}>{currentForm}</Box>
      <Box className={classes.form}>
        <Button onClick={onBackStep} className={classes.button}>
          Back
        </Button>
        <Button onClick={onNextStep} className={classes.button}>
          Next
        </Button>
      </Box>
    </>
  );
}
