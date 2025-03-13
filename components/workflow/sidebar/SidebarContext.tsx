"use client"; 

import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  issueFormOpen: boolean;
  toggleIssuesForm: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [issueFormOpen, setIssueFormOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const toggleIssuesForm = () => setIssueFormOpen((prev) => !prev)

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, issueFormOpen, toggleIssuesForm }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}