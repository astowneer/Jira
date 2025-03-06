import MainHeader from "@/components/workflow/MainHeader";
import Navbar from "@/components/workflow/Navbar";
import Sidebar from "@/components/workflow/Sidebar";
import { SidebarProvider } from "@/components/workflow/SidebarContext";
import Tabs from "@/components/workflow/Tabs";

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
          <div className="z-10">
            <Sidebar />
          </div>

          <div className="w-full">
            <div className="p-10 pb-0">
              <MainHeader />
            </div>

            <Tabs />

            <div className="px-10">
              {children}
            </div>
          </div>
        </section>
      </main>
    </SidebarProvider>
  );
}
