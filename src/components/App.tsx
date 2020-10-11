import * as React from "react";
import { hot } from "react-hot-loader";
import { Box } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import ProjectList from "./ProjectList";
import "./../assets/scss/App.scss";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="app">
      <Header />

      {
        <Box component="div" my={5}>
          <ProjectList />
        </Box>
      }
      
      <Footer />
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
