import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [token, setToken] = useState("");
  const handleRedirect = () => {
    const newUrl = "http://localhost:3000";
    chrome.tabs.create({ url: newUrl });
  };
  const handleMessage = () => {
    chrome.storage.sync.get(["myKey"], function (obj) {
      console.log(obj.myKey);
      setToken(obj.myKey);
    });
  };

  return (
    <div>
      Popup Page 124
      <button onClick={handleRedirect}>Redirect</button>
      <button onClick={handleMessage}>Display Token from Webpage</button>
      <p>{token && token}</p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
