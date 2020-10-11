import * as React from "react";
import { hot } from "react-hot-loader";
import Header from "./Header";
import Footer from "./Footer";

import "./../assets/scss/App.scss";
import ProjectList from "./ProjectList";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="app">
      <Header />

      {
        // * And render content here
      }
      <ProjectList />
      
      <Footer />
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
