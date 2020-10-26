import * as React from "react";
import { Container } from "@material-ui/core";

import ProjectItem from "./ProjectItem";
import { Project } from "./../types/api";


export interface ProjectListProps { }

export default function ProjectList(props: ProjectListProps) {
  let x: Array<Project> = [
    { id: 123, name: 'Test1', description: 'Test1 description.'},
    { id: 124, name: 'Test2', description: 'Test2 description.'},
    { id: 125, name: 'Test3', description: 'Test3 description.'},
  ];
  
  return (
    <Container>
      {
        x.map((el, index) => {
          return <ProjectItem project={el} index={index} />
        })
      }
    </Container>
  );
}

