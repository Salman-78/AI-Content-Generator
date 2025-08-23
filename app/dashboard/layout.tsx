"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCredit } from "../(context)/UpdateCreditContext";
import styles from "./layout.module.css"; // ✅ Import CSS Module

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCredit, setUpdateCredit] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCredit.Provider value={{ updateCredit, setUpdateCredit }}>
          <div className={styles.container}>
            <div className={styles.sidebar}>
              <SideNav />
            </div>

            <div className={styles.main}>
              <Header />
              {children}
            </div>
          </div>
        </UpdateCredit.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default Layout;
