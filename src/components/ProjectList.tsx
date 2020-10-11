import * as React from "react";

import "./../assets/scss/Footer.scss";
import ProjectItem from "./ProjectItem";


export interface ProjectListProps {}

export default function ProjectList(props: ProjectListProps) {
    let x = [1,2,3];
  return (
      <>
      {
          x.map((el, index) => {
              return <ProjectItem id={index} />
          })
      }
      </>
  );
}

