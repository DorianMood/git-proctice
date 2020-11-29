import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Box,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CreateCompanyStateBar from "./CreateCompanyStateBar";
import {
  CompanyMainInfoForm,
  CompanySemanticsForm,
  CompanyAdTemplatesForm,
  CompanyExportForm,
} from "./CreateCompanyForms";
import { Company } from "../types";
import { useForm } from "react-hook-form";

interface FormData {
  company: Company;
}

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

const steps: string[] = ["Main info", "Semantics", "Ad templates", "Export"];

export default function CreateCompanyPage(props: CreateCompanyPageProps) {
  const classes = useStyles();

  const [currentStep, setCurrentStep] = React.useState(0);

  // Form data
  const { handleSubmit, errors, register } = useForm();

  const onNextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, steps.length));
  };

  const onBackStep = () => {
    setCurrentStep(Math.max(currentStep - 1, -1));
  };

  let currentForm = <CompanyMainInfoForm />;

  switch (currentStep) {
    case 0:
      currentForm = <CompanyMainInfoForm />;
      break;
    case 1:
      currentForm = <CompanySemanticsForm />;
      break;
    case 2:
      currentForm = <CompanyAdTemplatesForm />;
      break;
    case 3:
      currentForm = <CompanyExportForm />;
      break;
    default:
      currentForm = <></>;
      break;
  }

  return (
    <>
      <CreateCompanyStateBar current={currentStep} steps={steps} />
      <Box className={classes.form}>
        <Button onClick={onBackStep} className={classes.button}>
          <NavigateBeforeIcon />
          Back
        </Button>
        <Button onClick={onNextStep} className={classes.button}>
          Next
          <NavigateNextIcon />
        </Button>
      </Box>
      <Box className={classes.form}>{currentForm}</Box>
    </>
  );
}
