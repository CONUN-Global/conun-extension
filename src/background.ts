chrome.runtime.onMessageExternal.addListener(function (request) {
  if (request.token) {
    console.log("show hello");
    const key = "myKey";
    chrome.storage.sync.set({ [key]: request.token });
  }
});
