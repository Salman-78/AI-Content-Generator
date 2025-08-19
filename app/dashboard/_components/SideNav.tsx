"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

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
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200} 
          height={200}
          className="my-2"
        />
      </div>
      <hr className="my-4.5 shadow-sm border-b-1" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-green-600 hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path ? "bg-purple-600 text-white" : ""
              }`}
            >
              <menu.icons />
              <h2>{menu.name}</h2>
            </div>
          </Link>
          // <div key={index}
          //   className={`flex gap-2 mb-2 p-3 hover:bg-green-600 hover:text-white rounded-lg cursor-pointer items-center ${
          //     path == menu.path ? " bg-purple-600 text-white" : ""
          //   }`}
          // >
          //   <menu.icons />
          //   <h2>{menu.name}</h2>
          // </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
