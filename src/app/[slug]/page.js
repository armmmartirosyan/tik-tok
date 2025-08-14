"use client";

import styles from "../page.module.css";
import { useEffect } from "react";

export default function HomeWithSlug() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(
            JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          );
        },
        (err) => {
          alert(err.message);
        }
      );
    } else {
      alert(JSON.stringify("Geolocation is not supported by this browser."));
    }
  }, []);

  return <div className={styles.page_with_slug}></div>;
}
