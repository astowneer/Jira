import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

export const metadata: Metadata = {
  title: "Jira",
  description: "Task manager",
};

// const RootLayout = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
{/* 
        <div className="relative">
          {modal}
        </div> */}

        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
