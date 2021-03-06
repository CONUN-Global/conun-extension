import React from "react";
import ReactDom from "react-dom";
import { QueryClientProvider } from "react-query";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

import { queryClient } from "./react-query";

ReactDom.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById("app")
);
