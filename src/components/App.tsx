import * as React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Header from "./Header";
import Footer from "./Footer";

import ProjectsPage from "./ProjectsPage";
import "./../assets/scss/App.scss";
import TemplatePage from "./TemplatePage";
import ProjectPage from "./ProjectPage";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {/* Top bar menu routes */}
        <Route path="/projects">
          <Box>
            <ProjectsPage />
          </Box>
        </Route>
        <Route path="/profile">profile</Route>
        <Route path="/templates">
          <TemplatePage />
        </Route>

        {/* Routes */}
        <Route path="/project/:id">
          <ProjectPage />
        </Route>

        <Route path="/">
          <Box>
            <ProjectsPage />
          </Box>
        </Route>
      </Switch>
      <Fab color="primary" aria-label="add" style={{float: "right", right: "20px", bottom: "20px"}}>
        <AddIcon />
      </Fab>
      <Footer />
    </BrowserRouter>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
