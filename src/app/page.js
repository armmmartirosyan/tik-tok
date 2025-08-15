"use client";

import styles from "./page.module.css";
import { useAll } from "@/hooks";

export default function Home() {
  useAll();

  return <div className={styles.page}></div>;
}
