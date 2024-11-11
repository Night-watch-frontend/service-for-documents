"use client";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./document.module.css";

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
      {loading && <p>Loading...</p>}
      {path && (
        <>
          <Image
            alt="Picture of the author"
            src={path}
            width={550}
            height={550}
            priority
            onLoad={() => setLoading(false)}
          />
          <button onClick={deleteHandle}>Delete</button>
        </>
      )}
    </div>
  );
});
