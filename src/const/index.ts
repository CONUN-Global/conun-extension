import useGetConBalance from "../hooks/useGetConBalance";
import useGetConxBalance from "../hooks/useGetConxBalance";
import useGetEthBalance from "../hooks/useGetEthBalance";

export const AUTH_TOKEN = "conun-auth-token";

export const PUBLIC_KEY_TOKEN = "conun-public-key";

export const PRIVATE_KEY_TOKEN = "conun-private-key";

export const WALLET_PRIVATE_KEY_TOKEN = "conun-wallet-private-key";

export const WALLET_ADDRESS_TOKEN = "conun-wallet-address";

export const METACON_PRIVATE = "metacon-private";

export const KEY_STORE_TOKEN = "conun-key-store";

export const CONUN_PASS_TOKEN = "conun-pass";

export const ORG_NAME = "Org1";

export const WALLET_TYPE = "ETH";

export const IDENTITY = "identity";

export const FcnTypes = {
  Transfer: "Transfer",
  Init: "Init",
  Mint: "Mint",
  Burn: "Burn",
  GetDetails: "GetDetails",
  BalanceOf: "BalanceOf",
};

export const TOKEN_CARDS = [
  {
    token: "conx",
    useBalance: useGetConxBalance,
    useGasEstimate: () => ({ data: null, loading: false }),
  },
  {
    token: "eth",
    useBalance: useGetEthBalance,
  },
  {
    token: "con",
    useBalance: useGetConBalance,
  },
];
