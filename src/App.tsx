import React from "react";
import { Switch } from "react-router-dom";

import ConunLogin from "./pages/ConunLogin";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <ConunLogin />
      </PrivateRoute>
      <PrivateRoute path="/conun-login">
        <p>login</p>
      </PrivateRoute>
    </Switch>
  );
}

export default App;
