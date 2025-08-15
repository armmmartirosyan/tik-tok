"use client";

import { useGetCoords, useGetIp } from "@/hooks";
import styles from "../page.module.css";

export default function HomeWithSlug() {
  useGetIp();
  useGetCoords();

  return <div className={styles.page}></div>;
}
