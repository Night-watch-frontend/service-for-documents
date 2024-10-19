import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { slug: string; path: string };
}) {
  const docsData = await fetch(
    `https://cloud-api.yandex.net/v1/disk/resources?path=CaseLabDocuments/${params.slug}/${params.path}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "OAuth y0_AgAAAAB5e9agAADLWwAAAAEU_o9WAADCv9ruQHZFhpbE_a3qUQGRDXBryw",
      },
      cache: "no-store",
    }
  );

  const doc = await docsData.json();
  console.log(doc.file);
  return (
    <div>
      <Image
        alt="Picture of the author"
        src={doc.file}
        width={400}
        height={400}
        priority
      ></Image>
    </div>
  );
}
