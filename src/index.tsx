import React from "react";
import ReactDom from "react-dom";

function App() {
  const handleClick = () => {
    chrome.storage.sync.get(["dataValue1"], function (data) {
      console.log("dataValue One", data.dataValue1);
    });
  };
  const handleRedirect = () => {
    const newUrl = "http://localhost:3000";
    chrome.tabs.create({ url: newUrl });
  };
  const handleMessage = () => {
    console.log("arrive?");
    chrome.storage.sync.get(["myKey"], function (obj) {
      console.log(obj);
    });
  };

  return (
    <div>
      Popup Page 124
      <button onClick={handleClick}>Button Click</button>
      <button onClick={handleRedirect}>Redirect</button>
      <button onClick={handleMessage}>Display Message</button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
