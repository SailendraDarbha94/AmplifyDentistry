import type { Metadata } from "next";

import "./globals.css";
import ToastContextProvider from "@/providers/ToastContextProvider";

export const metadata: Metadata = {
  title: "Project Demo",
  description: "Created as an assignment for Acharya Prashant Org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-nunito">
        <ToastContextProvider>{children}</ToastContextProvider>
      </body>
    </html>
  );
}
