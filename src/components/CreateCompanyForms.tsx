import {
  FormControl,
  FormControlLabel,
  Input,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import * as React from "react";

interface CreateCompanyFormProps {}

const useStyles = () => {
  return makeStyles({
    form: {
      maxWidth: "800px",
    },
  });
};

export const CreateCompanyForm1 = (props: CreateCompanyFormProps) => {
  const [google, setGoogle] = React.useState(false);
  const [yandex, setYandex] = React.useState(false);

  const googleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoogle(!google);
  };

  const yandexOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYandex(!yandex);
  };

  return (
    <form>
      <div>
        <Typography variant={"h5"}>New company</Typography>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Company name"
          variant="outlined"
        />
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            label="google"
            control={
              <Checkbox
                checked={google}
                onChange={googleOnChange}
                name="google"
              />
            }
          />
          <FormControlLabel
            label="yandex"
            control={
              <Checkbox
                checked={yandex}
                onChange={yandexOnChange}
                name="yandex"
              />
            }
          />
        </FormGroup>
      </div>
      <div>
        <TextField id="outlined-basic" label="URL" variant="outlined" />
      </div>
    </form>
  );
};

export const CreateCompanyForm2 = () => {
  return (
    <form>
      <div>
        <Typography variant="h5">Key phrases</Typography>
      </div>
      <div>

      </div>
    </form>
  );
};

export const CreateCompanyForm3 = () => {
  return (
    <form>
      <div>
        <Typography variant="h5">Key phrases</Typography>
      </div>
      <div>

      </div>
    </form>
  );
};

export const CreateCompanyForm4 = () => {
  return (
    <form>
      <div>
        <Typography variant="h5">Form 4</Typography>
      </div>
      <div>

      </div>
    </form>
  );
};