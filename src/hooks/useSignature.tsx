import { useMutation } from "react-query";

import { getPrivateKey } from "../helpers/privateKey";

import web3 from "../web3";

function useSignature() {
  const { mutateAsync: sign } = useMutation(async (data: any) => {
    const signature = await web3.eth.accounts.sign(
      JSON.stringify(data),
      getPrivateKey() || ""
    );

    return signature;
  });

  return { sign };
}

export default useSignature;
