import { useQuery } from "react-query";

import useCurrentUser from "./useCurrentUser";

import instance from "../axios/instance";

interface UseTransferFeeProps {
  to: string;
  token: string;
  amount: string | number;
}
function isQueryEnabled(token: string, amount: number | string, to: string) {
  if (token === "conx") {
    return false;
  }

  if (token === "con") {
    return !!amount && to?.length > 41;
  }

  return to?.length > 41;
}

async function getGasEstimate(
  from: string,
  to: string,
  type: string,
  amount: string | number
) {
  if (type === "conx") {
    return {};
  }

  if (type === "con") {
    const { data } = await instance.get(
      `/ether/getTransactionFeeCON?fromAddress=${from}&toAddress=${to}&value=${amount}`
    );
    return data;
  }

  const { data } = await instance.get(
    `/ether/getTransactionFeeETH?fromAddress=${from}&toAddress=${to}`
  );
  return data;
}

function useTransferFee({ to, token, amount }: UseTransferFeeProps) {
  const { currentUser } = useCurrentUser();

  const { data, isLoading } = useQuery(
    ["get-eth-gas-estimate", to, token, amount],
    () => getGasEstimate(currentUser.walletAddress, to, token, amount),
    {
      enabled: isQueryEnabled(token, amount, to),
      refetchOnMount: true,
      cacheTime: 0,
    }
  );
  return { data, loading: isLoading };
}

export default useTransferFee;
