import { Divider } from "@/components/divider";
import styles from "./page.module.css";
import Link from "next/link";
import { services } from "@/api/services";
export default async function Page({ params }: { params: { slug: string } }) {
  const decodeTitle = decodeURIComponent(params.slug);

  const listDocs = await services.getCategory(params.slug);
  const items = listDocs._embedded.items;

  //console.log(items);

  return (
    <div className={styles.container}>
      <h2>{decodeTitle}</h2>
      <Divider />
      <ul>
        {items.map((item: { name: string }) => {
          return (
            <li key={item.name}>
              <Link href={`/${params.slug}/${item.name}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
