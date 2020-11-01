import * as React from "react";

import { Project } from "./../types/api";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

interface ProjectNewProps {}

export default function ProjectNew(props: ProjectNewProps) {
  return (
    <Box component="div" my={2}>
        <Typography variant="h4">Новый проект</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}
