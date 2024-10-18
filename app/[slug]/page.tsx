import { Divider } from "@/components/divider";
import styles from "./page.module.css";
export default async function Page({ params }: { params: { slug: string } }) {
  const decodeTitle = decodeURIComponent(params.slug);

  const listDocsData = await fetch(
    `https://cloud-api.yandex.net/v1/disk/resources?path=CaseLabDocuments/${decodeTitle}`,
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

  const listDocs = await listDocsData.json();
  const items = listDocs._embedded.items;

  //console.log(items);

  return (
    <div className={styles.container}>
      <h2>{decodeTitle}</h2>
      <Divider />
      <ul>
        {items.map((item: { name: string }) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
