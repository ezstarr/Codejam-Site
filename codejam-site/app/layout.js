import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";

const UbuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={UbuntuMono.className}>{children}</body>
    </html>
  );
}
