import * as React from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Box } from "@material-ui/core";

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
          <Route path="/profile">
            profile
          </Route>
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

        <Footer />
    </BrowserRouter>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
