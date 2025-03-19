import ProjectHeader from "@/components/workflow/ProjectHeader";
import Navbar from "@/components/workflow/Navbar";
import Sidebar from "@/components/workflow/sidebar/Sidebar";
import Tabs from "@/components/workflow/tabs/Tabs";
import IssueForm from "@/components/workflow/IssueForm";
import { SidebarProvider } from "@/components/workflow/sidebar/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <main className="w-full">
        <div className="h-[48px] w-full sticky top-0 z-50">
          <Navbar />
        </div>
      
        <section className="flex">
          <div className="z-40">
            <Sidebar />
          </div>

          <div className="w-full overflow-hidden">
            <div className="p-10 pb-0">
              <ProjectHeader title="Сервіс залізничної компанії" />
            </div>

            <div>
              <Tabs />
            </div>

            <div className="px-10">
              {children}
            </div>
          </div>
        </section>

        <IssueForm />
      </main>
    </SidebarProvider>
  );
}
