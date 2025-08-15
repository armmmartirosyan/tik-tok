import "./globals.css";

export const metadata = {
  title: "Google Wallet - Your Fast and Secure Digital Wallet",
  description:
    "Google Wallet gives you fast, secure access to your everyday essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
