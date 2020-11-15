import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";

import { Project } from "./../types/api";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function ProjectItem(props: ProjectItemProps) {
  const { project, index } = props;

  return (
    <Box component="div" my={2}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs={8} container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="subtitle1">{index}</Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: {project.id}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Button variant="contained" color="primary">
                    Remove
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Link
                    to={`/project/${project.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" color="primary">
                      More
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
