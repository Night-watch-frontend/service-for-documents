import { Document } from "@/components/view-document";

export default async function Page({
  params,
}: {
  params: { slug: string; path: string };
}) {
  const path = `${params.slug}/${params.path}`;

  return <Document href={path} />;
}
