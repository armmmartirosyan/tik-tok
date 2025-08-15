"use client";

import styles from "./page.module.css";
import { useGetIp, useGetCoords } from "@/hooks";

export default function Home() {
  useGetIp();
  useGetCoords();

  return <div className={styles.page}></div>;
}
