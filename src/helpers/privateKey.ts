import { METACON_PRIVATE } from "../const";

export function getPrivateKey() {
  let privateKey;
  chrome.storage.sync.get([METACON_PRIVATE], (value) => (privateKey = value));
  return privateKey;
}

export function setPrivateKey(key: string) {
  chrome.storage.sync.set({ [METACON_PRIVATE]: key });
}
