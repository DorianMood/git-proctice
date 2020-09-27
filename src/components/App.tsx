import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="app">
      <h1>Hello World1!</h1>

      <p>Foo to the barz</p>
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
