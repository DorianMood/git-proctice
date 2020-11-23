import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Breadcrumbs,
  Link,
  Typography,
  Stepper,
  Step,
  StepLabel,
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
  steps: string[];
}

export default function CreateCompanyStateBar(
  props: CreateCompanyStateBarProps,
) {
  const classes = useStyles();

  const { current, steps } = props;

  return (
    <Stepper alternativeLabel activeStep={current}>
      {steps.map((step, index) => <Step key={index}>
        <StepLabel>{step}</StepLabel>
      </Step>)}
    </Stepper>
  );
}
