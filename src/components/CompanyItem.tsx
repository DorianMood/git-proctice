import * as React from "react";

import { Company } from "../types/api";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography
} from "@material-ui/core";

interface CompanyItemProps {
  company: Company;
  index: number;
}

export default function CompanyItem(props: CompanyItemProps) {

  const { company, index } = props;

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
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: {company.id}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button variant="contained" color="primary">Remove</Button>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button variant="contained" color="primary">More</Button>
                </Typography>
                
              </Grid>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );

  // <Card>
  //     <CardActionArea>
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           {project.name}
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           {project.description}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         {project.description}
  //       </Button>
  //       <Button size="small" color="primary">
  //         {project.description}
  //       </Button>
  //     </CardActions>
  //   </Card>
}
