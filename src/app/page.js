import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();

  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  const ip = realIp || (forwardedFor ? forwardedFor.split(",")[0] : null);

  console.log(JSON.stringify({ forwardedFor, realIp }));

  return <div>{ip}</div>;
}
// function getLocalIP() {
//   return new Promise(function (resolve, reject) {
//     // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
//     var RTCPeerConnection =
//       /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection ||
//       window.mozRTCPeerConnection;

//     if (!RTCPeerConnection) {
//       reject("Your browser does not support this API");
//     }

//     var rtc = new RTCPeerConnection({ iceServers: [] });
//     var addrs = {};
//     addrs["0.0.0.0"] = false;

//     function grepSDP(sdp) {
//       var hosts = [];
//       var finalIP = "";
//       sdp.split("\r\n").forEach(function (line) {
//         // c.f. http://tools.ietf.org/html/rfc4566#page-39
//         if (~line.indexOf("a=candidate")) {
//           // http://tools.ietf.org/html/rfc4566#section-5.13
//           var parts = line.split(" "), // http://tools.ietf.org/html/rfc5245#section-15.1
//             addr = parts[4],
//             type = parts[7];
//           if (type === "host") {
//             finalIP = addr;
//           }
//         } else if (~line.indexOf("c=")) {
//           // http://tools.ietf.org/html/rfc4566#section-5.7
//           var parts = line.split(" "),
//             addr = parts[2];
//           finalIP = addr;
//         }
//       });
//       return finalIP;
//     }

//     if (1 || window.mozRTCPeerConnection) {
//       // FF [and now Chrome!] needs a channel/stream to proceed
//       rtc.createDataChannel("", { reliable: false });
//     }

//     rtc.onicecandidate = function (evt) {
//       // convert the candidate to SDP so we can run it through our general parser
//       // see https://twitter.com/lancestout/status/525796175425720320 for details
//       if (evt.candidate) {
//         var addr = grepSDP("a=" + evt.candidate.candidate);
//         resolve(addr);
//       }
//     };
//     rtc.createOffer(
//       function (offerDesc) {
//         rtc.setLocalDescription(offerDesc);
//       },
//       function (e) {
//         console.warn("offer failed", e);
//       }
//     );
//   });
// }
// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         alert(
//           JSON.stringify({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           })
//         );
//       },
//       (err) => {
//         alert(err.message);
//       }
//     );
//   } else {
//     alert(JSON.stringify("Geolocation is not supported by this browser."));
//   }
// }, []);

// useEffect(() => {
// fetch("https://api.ipify.org?format=json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Your IP Address:", data.ip);
//   })
//   .catch((error) => {
//     console.error("Error fetching IP:", error);
//   });
// getLocalIP().then((ipAddr) => {
//   console.log({ ipAddr });
// });
// }, []);
