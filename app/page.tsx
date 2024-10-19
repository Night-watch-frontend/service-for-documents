import { Divider } from "@/components/divider";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const listDocsData = await fetch(
    "https://cloud-api.yandex.net/v1/disk/resources/files",
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

  // console.log(info._embedded.items);
  const listDocs = await listDocsData.json();
  //  console.log(listDocs.items);
  return (
    <div className={styles.container}>
      <h2>{"Все документы"}</h2>
      <Divider />
      <ul>
        {listDocs.items.map((item: { name: string; path: string }) => {
          const path = item.path.split("/");
          const href = path.slice(2).join("/");
          return (
            <li key={item.name}>
              <Link href={`/${href}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
