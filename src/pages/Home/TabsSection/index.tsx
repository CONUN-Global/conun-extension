import React from "react";
import classNames from "classnames";

import Wallet from "./Wallet";

import * as styles from "./TabsSection.module.scss";

function TabsSection() {
  return (
    <div className={styles.TabsSection}>
      <div className={styles.Tabs}>
        <span className={classNames(styles.Tab)}>Wallet</span>
      </div>
      <Wallet />
    </div>
  );
}

export default TabsSection;
