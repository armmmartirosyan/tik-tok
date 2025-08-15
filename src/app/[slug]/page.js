"use client";

import { useAll } from "@/hooks";
import styles from "../page.module.css";

export default function HomeWithSlug() {
  useAll();

  return <div className={styles.page}></div>;
}
