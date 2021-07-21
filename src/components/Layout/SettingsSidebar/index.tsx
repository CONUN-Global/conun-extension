import React from "react";
import { motion } from "framer-motion";

import Button from "../../Button";
import OutsideClickHandler from "../../OutsideClickHandler";

import useStore from "../../../store/store";

import ConunLogo from "../../../assets/icons/conun-logo-big.svg";

import styles from "./SettingsSidebar.module.scss";

const tabs = [
  {
    id: "dicord",
    label: "Connect to Discord",
    to: "https://discord.gg/sUBkJJTB8y",
  },
];

const variants = {
  open: { x: 0 },
  closed: { x: 200 },
};

function SettingsSidebar() {
  const isSettingsOpen = useStore((state) => state.isSettingsOpen);
  const setSettings = useStore((state) => state.setSettings);

  return (
    <OutsideClickHandler onClickOutside={() => setSettings(false)}>
      <motion.div
        className={styles.SettingsSidebar}
        animate={isSettingsOpen ? "open" : "closed"}
        initial="closed"
        variants={variants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className={styles.LogoContainer}>
          <ConunLogo className={styles.ConunLogo} />
        </div>
        <div className={styles.TopButtons}>
          <Button className={styles.TopButton} noStyle>
            Logout
          </Button>
        </div>
        <div className={styles.Tabs}>
          {tabs.map((tab) => {
            return (
              <a
                className={styles.Tab}
                key={tab.id}
                href={tab.to}
                target="_blank"
                rel="noreferrer"
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </OutsideClickHandler>
  );
}

export default SettingsSidebar;
