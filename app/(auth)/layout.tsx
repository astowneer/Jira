export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-[url(/images/hero.jpg)] bg-cover bg-no-repeat flex justify-center items-center h-full">
      {children}
    </main>
  );
}