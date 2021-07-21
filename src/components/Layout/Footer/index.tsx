import React from "react";
import classNames from "classnames";

import Button from "../../Button";

import useStore from "../../../store/store";

import History from "../../../assets/icons/history.svg";

import styles from "./Footer.module.scss";

function Footer() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const setTransactions = useStore((state) => state.setTransactions);

  return (
    <div
      className={classNames(styles.Footer, {
        [styles.isAuthenticated]: isAuthenticated,
      })}
    >
      <div className={styles.Versioning}>
        <div className={styles.Version}>Conun Extension</div>
      </div>
      {isAuthenticated && (
        <Button
          type="button"
          onClick={() => setTransactions(true)}
          className={styles.HistoryButton}
          noStyle
        >
          <History className={styles.HistoryIcon} />
        </Button>
      )}
    </div>
  );
}

export default Footer;
