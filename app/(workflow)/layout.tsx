import ProjectHeader from "@/components/workflow/ProjectHeader";
import Navbar from "@/components/workflow/Navbar";
import Sidebar from "@/components/workflow/sidebar/Sidebar";
// import Tabs from "@/components/workflow/tabss/Tabs";
import { SidebarProvider } from "@/components/workflow/sidebar/SidebarContext";
import Tabs from "@/components/workflow/tabs/Tabs";

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
          <div className="z-40">
            <Sidebar />
          </div>

          <div className="w-full overflow-hidden">
            <div className="p-10 pb-0">
              <ProjectHeader title="Сервіс залізничної компанії" />
            </div>

            <div className="">
              <Tabs />

            </div>

            <div className="px-10">
              {children}
            </div>
          </div>
        </section>
      </main>
    </SidebarProvider>
  );
}
