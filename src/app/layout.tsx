import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { TabBar } from "@/components/tab_bar/tab_bar";
import { ThemeProvider } from "@/provider/ThemeProvider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <TabBar />
        {children}
      </body>
    </html>
  );
}
