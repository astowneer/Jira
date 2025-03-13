export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-[url(/images/bg2.png)] bg-cover bg-no-repeat flex justify-center items-center h-full">
      {children}
    </main>
  );
}