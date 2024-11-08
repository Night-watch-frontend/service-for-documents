"use client";
import { Divider } from "@/components/divider";
import styles from "./page.module.css";
import Link from "next/link";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
const Page = observer(({ params }: { params: { slug: string } }) => {
  const decodeTitle = decodeURIComponent(params.slug);

  useEffect(() => {
    storeDocuments.fetchDocuments(decodeTitle);
  }, []);

  const items = storeDocuments.state.documents;
  const title = storeDocuments.state.title;

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Divider />
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item.name}>
              <Link href={`/${params.slug}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        {items.length === 0 && <li>Нет документов</li>}
      </ul>
    </div>
  );
});

export default Page;
