"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";
import styles from "./SideNav.module.css";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icons: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icons: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icons: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icons: Settings,
      path: "/dashboard/setting",
    },
  ];
  const path = usePathname();

  return (
    <div className={styles.sidenav}>
      <div className={styles.logoContainer}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className={styles.logo}
        />
      </div>

      <hr className={styles.divider} />

      <div className={styles.menuList}>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`${styles.menuItem} ${
                path === menu.path ? styles.active : ""
              }`}
            >
              <menu.icons />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.usageTrack}>
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
