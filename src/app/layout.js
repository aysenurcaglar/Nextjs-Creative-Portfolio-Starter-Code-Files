import { Modern_Antiqua } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const antiqua = Modern_Antiqua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-antiqua",
});

export const metadata = {
  title: "Ayse Nur Caglar",
  description: "Ayse Nur Caglar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(antiqua.className, "bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
