import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

export const metadata: Metadata = {
  title: "Jira",
  description: "Task manager",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="relative">
          {modal}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
