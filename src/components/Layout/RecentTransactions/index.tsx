import React from "react";
import { motion } from "framer-motion";
import { formatDistance } from "date-fns";
import { useQuery } from "react-query";

import OutsideClickHandler from "../../OutsideClickHandler";
import Tooltip from "../../Tooltip";
import Button from "../../Button";

import Ethereum from "../../../assets/icons/ethereum.svg";
import Conun from "../../../assets/icons/conun.svg";
import Copy from "../../../assets/icons/copy.svg";
import Link from "../../../assets/icons/link.svg";

import styles from "./RecentTransactions.module.scss";

import useStore from "../../../store/store";

const variants = {
  open: { y: 0 },
  closed: { y: 339 },
};

function RecentTransactions() {
  const isTransactionsOpen = useStore((state) => state.isTransactionsOpen);
  const setTransactions = useStore((state) => state.setTransactions);

  const { data } = useQuery<any>(
    "get-recent-transactions",
    async () => ({
      list: [],
    }),
    {
      cacheTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
    }
  );

  return (
    <OutsideClickHandler onClickOutside={() => setTransactions(false)}>
      <motion.div
        className={styles.RecentTransactions}
        animate={isTransactionsOpen ? "open" : "closed"}
        initial="closed"
        variants={variants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className={styles.Title}>Recent Transactions</p>
        <div className={styles.Transactions}>
          {data?.list?.length ? (
            data?.list?.map((tx: any) => (
              <div key={tx?.txId} className={styles.Transaction}>
                {tx.token === "eth" ? (
                  <Ethereum className={styles.Icon} />
                ) : (
                  <Conun className={styles.Icon} />
                )}
                <span className={styles.Amount}>
                  {tx.amount} {tx.token}
                </span>
                <span className={styles.Date}>
                  {formatDistance(new Date(tx.date), new Date(), {
                    addSuffix: true,
                  })}
                </span>
                <Tooltip id="copy">
                  <Button
                    type="button"
                    noStyle
                    onClick={() => navigator.clipboard.writeText(tx?.txId)}
                    data-for="copy"
                    data-tip="Copy transaction ID"
                  >
                    <Copy className={styles.ActionIcon} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="link"
                  data-for="link"
                  data-tip={
                    tx?.token === "conx"
                      ? "View on Conscan"
                      : "View on Etherescan"
                  }
                >
                  <a
                    href={
                      tx.token === "conx"
                        ? `https://conscan.conun.io/txns/${tx.txId}`
                        : `https://ropsten.etherscan.io/tx/${tx.txId}`
                    }
                    className={styles.TransactionLink}
                    target="_blank"
                    rel="noreferrer"
                    data-for="link"
                    data-tip={
                      tx?.token === "conx"
                        ? "View on Conscan"
                        : "View on Etherescan"
                    }
                  >
                    <Link className={styles.ActionIcon} />
                  </a>
                </Tooltip>
              </div>
            ))
          ) : (
            <div className={styles.Transaction}>
              <span className={styles.NoTransactions}>
                No transactions recorded
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </OutsideClickHandler>
  );
}

export default RecentTransactions;
