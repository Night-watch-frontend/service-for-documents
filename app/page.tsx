import { Divider } from "@/components/divider";
import styles from "./page.module.css";
import Link from "next/link";
import { services } from "@/api/services";

export default async function Home() {
  const listDocs = await services.getAllDocuments();

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
