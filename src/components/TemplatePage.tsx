import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import TemplateList from "./TemplateList";

export interface TemplatePageProps {}

export default function TemplatePage(props: TemplatePageProps) {
  return (
    <>
    add template
    <TemplateList />
    </>
  );
}
