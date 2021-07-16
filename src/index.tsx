import React from "react";
import ReactDom from "react-dom";

import LoginGoogle from "./LoginGoogle";
import LoginKakao from "./LoginKakao";
function App() {
  return (
    <div>
      <h1>Hola</h1>
      <LoginGoogle />
      <LoginKakao />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
