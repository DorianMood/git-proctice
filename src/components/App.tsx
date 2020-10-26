import * as React from "react";
import { hot } from "react-hot-loader";
import { Box, Modal } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import ProjectList from "./ProjectList";
import ProjectsPage from "./ProjectsPage";
import "./../assets/scss/App.scss";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="app">
      <Header />

      {
        <Box>
          <ProjectsPage />
        </Box>
      }
      
      <Footer />
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
