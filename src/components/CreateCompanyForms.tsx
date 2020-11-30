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
  Select,
  MenuItem,
  Paper,
  Box,
  Modal,
  Button,
  createStyles,
  Theme,
} from "@material-ui/core";
import { arrayToTree, TreeItem } from "performant-array-to-tree";
import * as React from "react";
import { rootCertificates } from "tls";
import TreeViewSelectable, {
  TreeViewSelectableNode, TreeViewSelectableNodeData,
} from "./TreeViewSelectable";

interface CreateCompanyFormProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      maxWidth: "800px",
    },
    flexContainer: {
      display: "flex",
    },
    singleBadge: {
      padding: "10px",
      margin: "10px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalRoot: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }),
);

// Input defaults

const businessCardsDefaults: string[] = [
  "Business card 1",
  "Business card 2",
  "Business card 3",
];

const countriesDefaults: string[] = [
  "Russia",
  "Ukraine",
  "Belarus",
  "Kazakhstan",
];

const citiesDefaults: string[] = [
  "Yekaterinburg",
  "Moscow",
  "Minsk",
  "Kiev",
  "Nursultan",
];

interface TagInputProps {
  onAdd: (item: string | number) => void;
  onDelete: (index: number) => void;
  tags: (number | string)[];
  options: (number | string)[];
}

interface Region {
  id: number;
  parentId?: number;
  name: string;
}

const regionsDefault: Region[] = [
  { id: 1, name: "Russia" },
  { id: 2, name: "Ukraine" },
  { id: 3, name: "Moscow", parentId: 1 },
  { id: 4, name: "Yekaterinburg", parentId: 1 },
  { id: 5, name: "Kazan", parentId: 1 },
  { id: 6, name: "Dnepropetrovsk", parentId: 2 },
  { id: 7, name: "Kiev", parentId: 2 },
];

const TagInput = (props: TagInputProps) => {
  const classes = useStyles();

  const { options, tags, onAdd, onDelete } = props;

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const modalBody = (
    <Paper className={classes.modalRoot}>
      <Typography variant={"h4"}>Add item</Typography>
      <TreeViewSelectable data={regionsDefault} />
    </Paper>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {modalBody}
      </Modal>
      <Box className={classes.flexContainer}>
        {tags.map((item, index) => (
          <Paper
            className={classes.singleBadge}
            onClick={(event: React.MouseEvent) => onDelete(index)}
            key={index}
          >
            {item}
          </Paper>
        ))}
      </Box>
      <Button onClick={() => setOpen(true)}>Add item</Button>
    </>
  );
};

export const CompanyMainInfoForm = (props: CreateCompanyFormProps) => {
  const [google, setGoogle] = React.useState(false);
  const [yandex, setYandex] = React.useState(false);

  const googleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoogle(!google);
  };

  const yandexOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYandex(!yandex);
  };

  const [countries, setCountries] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  const onDeleteCountry = (index: number) => {
    countries.splice(index, 1);
    console.log(countries);
    setCountries(countries);
  };

  const onAddCountry = (item: string) => {
    setCountries([...countries, item]);
  };

  const onDeleteCity = (index: number) => {
    cities.splice(index, 1);
    setCities(cities);
  };

  const onAddcity = (item: string) => {
    setCities([...cities, item]);
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
        <TextField label="URL" variant="outlined" />
      </div>
      <div>
        <Select
          value={businessCardsDefaults[0]}
          onChange={() => {
            console.log(1);
          }}
        >
          {businessCardsDefaults.map((item, index) => {
            return <MenuItem value={item} key={index}>{item}</MenuItem>;
          })}
        </Select>
      </div>
      <div>
        <TextField
          label="Regions to show"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="Regions to hide"
          variant="outlined"
        />
      </div>
      <div>
        <TagInput
          options={countriesDefaults}
          tags={countries}
          onAdd={onAddCountry}
          onDelete={onDeleteCountry}
        />
      </div>
    </form>
  );
};

export const CompanySemanticsForm = () => {
  return (
    <form>
      <div>
        <Typography variant="h5">Key phrases</Typography>
      </div>
      <div></div>
    </form>
  );
};

export const CompanyAdTemplatesForm = () => {
  return (
    <form>
      <div>
        <Typography variant="h5"> </Typography>
      </div>
      <div></div>
    </form>
  );
};

export const CompanyExportForm = () => {
  return (
    <form>
      <div>
        <Typography variant="h5">Form 4</Typography>
      </div>
      <div></div>
    </form>
  );
};
