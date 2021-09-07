import React from "react";

import Button from "../../components/Button";

import * as styles from "./ConunLogin.module.scss";

function ConunLogin() {
  return (
    <div className={styles.Container}>
      <Button type="button" className={styles.LogoutButton}>
        Register
      </Button>
    </div>
  );
}

export default ConunLogin;
