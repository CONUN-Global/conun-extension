import React, { useEffect } from "react";
import { Slide } from "pure-react-carousel";
import classNames from "classnames";

import Button from "../Button";

import useCurrentUser from "../../hooks/useCurrentUser";
import useCurrentToken from "../../hooks/useCurrentToken";

import Conun from "../../assets/icons/conun-white.svg";
import Ethereum from "../../assets/icons/ethereum.svg";
import RefreshIcon from "../../assets/icons/refresh.svg";

import * as styles from "./TokenCard.module.scss";

interface TokenCardProps {
  token: {
    token: string;
    useBalance: () => {
      balance: {
        payload: number;
      };
      loading: boolean;
      refetch: () => void;
      isFetching: boolean;
    };
  };
  i: number;
}

function TokenCard({ token, i }: TokenCardProps) {
  const { currentUser } = useCurrentUser();
  const currentToken = useCurrentToken();
  const { balance, refetch } = token?.useBalance();

  useEffect(() => {
    if (currentToken?.token === token?.token) {
      refetch();
    }
  }, [currentToken]);

  return (
    <Slide innerClassName={styles.CardContainer} index={i}>
      <div className={classNames(styles.Card, styles[token?.token])}>
        <div className={styles.Header}>
          {token?.token === "conx" ? (
            <span className={styles.Network}>Conun Network</span>
          ) : (
            <span className={styles.Network}>Ethereum Network</span>
          )}
          <Button
            noStyle
            className={styles.RefreshButton}
            onClick={() => refetch()}
          >
            <RefreshIcon className={styles.RefreshIcon} />
          </Button>
        </div>
        <div className={styles.BalanceContainer}>
          <div className={styles.Balance}>
            {token?.token === "eth" ? (
              <Ethereum className={styles.ConunLogoBalance} />
            ) : (
              <Conun className={styles.ConunLogoBalance} />
            )}
            {balance?.payload}
          </div>
          <span className={styles.TokenName}>{token.token}</span>
        </div>
        <div className={styles.WalletAddressContainer}>
          <div className={styles.WalletAddress}>
            {currentUser?.walletAddress}
          </div>
          <span className={styles.WalletLabel}>Wallet Id</span>
        </div>
        <span className={styles.UserName}>{currentUser?.name}</span>
      </div>
    </Slide>
  );
}

export default TokenCard;
