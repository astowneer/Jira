import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SoftwareLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <div className="relative">
        {modal}
      </div>
      <Footer />
    </main>
  );
}
