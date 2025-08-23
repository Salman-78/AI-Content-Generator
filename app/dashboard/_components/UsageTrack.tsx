"use client";
import styles from "./UserTrack.module.css"
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect } from "react";
import { HISTORY } from "../history/page";
import { usePathname } from "next/navigation";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCredit } from "@/app/(context)/UpdateCreditContext";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const totalCredits = userSubscription ? 100000 : 10000;
  const pathname = usePathname();
  const {updateCredit, setUpdateCredit}=useContext(UpdateCredit);

  useEffect(() => {
    if (user) {
      user&&getData();
      user&&checkUserSubscription();
    }
  }, [user, pathname]);

  useEffect(() => {
    user&&getData();
  }, [updateCredit&&user])
  


  // ✅ Get AI usage data
  const getData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
    // @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    let total = 0;
    result.forEach((ele) => {
      total += ele.aiResponse?.trim().split(/\s+/).length || 0;
    });
    setTotalUsage(total);
  };

  // ✅ Check if user is subscribed
  const checkUserSubscription = async () => {
    const result = await db
      .select()
      .from(UserSubscription)
    // @ts-ignore
      .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));

    setUserSubscription(result.length > 0);
  };

  return (
    <div className={styles.usageContainer}>
  <div className={styles.usageCard}>
    <h2 className={styles.title}>Credits</h2>
    <div className={styles.progressBarBackground}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${Math.min((totalUsage / totalCredits) * 100, 100)}%` }}
      ></div>
    </div>
    <h2 className={styles.usageText}>
      {totalUsage}/{totalCredits} credit used
    </h2>
  </div>

  {!userSubscription && (
    <Button className={styles.upgradeButton}>Upgrade</Button>
  )}
</div>

  );
};

export default UsageTrack;

