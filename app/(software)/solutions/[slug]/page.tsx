export default async function Solutions({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return <div>Solutions {slug}</div>;
}