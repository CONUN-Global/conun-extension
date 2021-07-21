import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./components/Layout";
import ConunLogin from "./pages/ConunLogin";
import HomeWrapper from "./pages/Home/HomeWrapper";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Layout>
      <Switch>
        <PrivateRoute path="/">
          <HomeWrapper />
        </PrivateRoute>
        <PrivateRoute exact path="/conun-login">
          <ConunLogin />
        </PrivateRoute>
      </Switch>
    </Layout>
  );
}

export default App;
