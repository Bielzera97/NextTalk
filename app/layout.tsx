import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Next-Talk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
