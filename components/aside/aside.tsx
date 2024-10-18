import { NavAside } from "../navigation-aside";
import styles from "./aside.module.css";

export async function Aside() {
  const data = await fetch(
    "https://cloud-api.yandex.net/v1/disk/resources?path=CaseLabDocuments",
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

  const info = await data.json();
  const items = info._embedded.items;

  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>{"Категории документов"}</h3>
      <ul>
        <li className={styles.item}>
          <NavAside navLinks={[{ title: "Все документы", href: "/" }]} />
        </li>
        {items.map((item: { name: string }) => {
          return (
            <li key={item.name} className={styles.item}>
              <NavAside
                navLinks={[{ title: item.name, href: `/${item.name}` }]}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
