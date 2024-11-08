"use client";
import { observer } from "mobx-react-lite";
import { NavAside } from "../navigation-aside";
import styles from "./aside.module.css";
import { useEffect } from "react";
import { storeDocuments } from "@/store/store";

const Aside = observer(() => {
  useEffect(() => {
    storeDocuments.fetchCategories();
  }, []);

  const items = storeDocuments.state.listCategories;

  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>{"Категории документов"}</h3>
      <ul>
        <li className={styles.item}>
          <NavAside navLinks={[{ title: "Все документы", href: "/" }]} />
        </li>
        {items.map((item) => (
          <li key={item.name} className={styles.item}>
            <NavAside
              navLinks={[{ title: item.name, href: `/${item.name}` }]}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
});

export { Aside };
