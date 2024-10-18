import { Aside } from "../aside";
import styles from "./main.module.css";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className={styles.container}>
        <Aside />
        {children}
      </div>
    </main>
  );
}
