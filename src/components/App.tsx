import * as React from "react";
import { hot } from "react-hot-loader";
import Header from "./Header";

import "./../assets/scss/App.scss";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
