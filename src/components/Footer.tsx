import * as React from "react";
import { Box, Typography } from "@material-ui/core";

import "./../assets/scss/Footer.scss";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Box>
      <Typography variant="caption">Buttom text.</Typography>
    </Box>
  );
}
