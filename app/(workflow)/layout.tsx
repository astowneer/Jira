import Navbar from "@/components/workflow/Navbar";
import Sidebar from "@/components/workflow/Sidebar";
import { SidebarProvider } from "@/components/workflow/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <main className="h-screen w-full">
        <Navbar />
        
        <section className="flex">
          <Sidebar />
          
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
