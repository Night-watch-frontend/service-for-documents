import { services } from "@/api/services";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { slug: string; path: string };
}) {
  const path = `${params.slug}/${params.path}`;

  const doc = await services.getDocument(path);

  return (
    <div>
      <Image
        alt="Picture of the author"
        src={doc.href}
        width={400}
        height={400}
        priority
      ></Image>
    </div>
  );
}
