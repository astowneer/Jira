import Navbar from "@/components/workflow/Navbar";
import Sidebar from "@/components/workflow/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full">
      <Navbar />
      
      <section className="flex">
        <Sidebar />

        {children}
      </section>
    </main>
  );
}
