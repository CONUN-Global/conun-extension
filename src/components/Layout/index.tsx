import React from "react";

import Footer from "./Footer";
import SettingsSidebar from "./SettingsSidebar";
import RecentTransactions from "./RecentTransactions";
import Spinner from "../Spinner";

import useCurrentUser from "../../hooks/useCurrentUser";
import useStore from "../../store/store";

import * as styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  const { isLoading } = useCurrentUser();

  return (
    <>
      {isLoading ? (
        <div className={styles.SpinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          {isAuthenticated && <SettingsSidebar />}
          <div className={styles.Layout}>{children}</div>
          <Footer />
          {isAuthenticated && <RecentTransactions />}
        </>
      )}
    </>
  );
}

export default Layout;
