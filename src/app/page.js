"use client";

import styles from "@/app/page.module.css";
import { useAll } from "@/hooks";

export default function Home() {
  useAll();

  return (
    <div className={styles.page}>
      <iframe src="https://wallet.google/" className={styles.iframe} />
    </div>
  );
}
