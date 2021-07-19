import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./Routes/PrivateRoute";

const HomeWrapper = lazy(() => import("./pages/Home/HomeWrapper"));
const ConunLogin = lazy(() => import("./pages/ConunLogin"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <PrivateRoute exact path="/">
          <HomeWrapper />
        </PrivateRoute>
        <PrivateRoute path="/conun-login">
          <ConunLogin />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
}

export default App;
