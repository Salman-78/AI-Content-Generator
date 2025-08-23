import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
import styles from "./TemplateCard.module.css";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className={styles.card}>
        <Image src={item.icon} alt="icon" height={50} width={50} />
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.description}>{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
