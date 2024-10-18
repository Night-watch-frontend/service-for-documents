import styles from "./page.module.css";

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
      <h2>{""}</h2>
      <ul>
        {listDocs.items.map((item: { name: string }) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
