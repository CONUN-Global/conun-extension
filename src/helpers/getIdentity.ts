import { IDENTITY } from "../const";

function getIdentity() {
  let identity;
  chrome.storage.sync.get([IDENTITY], (value) => (identity = value));
  return identity;
}

export function setIndentity(token: any) {
  chrome.storage.sync.set({ [IDENTITY]: token });
}

export default getIdentity;
