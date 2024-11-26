"use client";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./document.module.css";
import SelectMove from "../select/select";
import { Button } from "@mui/material";

interface IDocumentProps {
  href: string;
}

export const Document: React.FC<IDocumentProps> = observer(({ href }) => {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    storeDocuments.fetchDocument(href);
  }, []);

  const path = storeDocuments.state.path;

  const deleteHandle = () => {
    storeDocuments.delete(href);
    setLoading(false);
    router.back();
  };

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.loading}>
          <h4>Loading...</h4>
        </div>
      )}
      {path && (
        <div className={styles.wrapper}>
          <Image
            alt="Picture of the author"
            src={path}
            width={600}
            height={650}
            priority
            onLoad={() => setLoading(false)}
          />
          <div className={styles.actions}>
            <Button onClick={deleteHandle}>Удалить документ</Button>
            <SelectMove values={storeDocuments.state.listCategories} />
          </div>
        </div>
      )}
    </div>
  );
});
