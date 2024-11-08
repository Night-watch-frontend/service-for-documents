"use client";
import { Divider } from "@/components/divider";
import styles from "./page.module.css";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { storeDocuments } from "@/store/store";
import { usePathname } from "next/navigation";

const Home = observer(() => {
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      storeDocuments.fetchAllDocuments();
    }
  }, [path]);

  const listDocs = storeDocuments.state.documents;

  return (
    <div className={styles.container}>
      <h2>{"Все документы"}</h2>
      <Divider />
      <ul>
        {listDocs.map((item: { name: string; path: string }) => {
          return (
            <li key={item.name}>
              <Link
                href={`/${
                  item.path ? item.path.split("/").slice(2).join("/") : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Home;
