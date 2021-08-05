import { AUTH_TOKEN } from "../const";

async function getAuthHeader() {
  const getToken = () =>
    new Promise((resolve) =>
      chrome.storage.sync.get([AUTH_TOKEN], (result) => resolve(result))
    );

  const token: any = await getToken();

  return token?.["conun-auth-token"] ?? "";
}

export function setAuthHeader(token: string) {
  chrome.storage.sync.set({ [AUTH_TOKEN]: token });
}

export default getAuthHeader;
