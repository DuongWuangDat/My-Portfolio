import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { TabBar } from "@/components/tab_bar/tab_bar";
import { ThemeProvider } from "@/provider/ThemeProvider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuangDat.dev",
  description: "Quang Dat portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className} suppressHydrationWarning={true}>
        <TabBar />
        {children}
      </body>
    </html>
  );
}
