"use client";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useEffect } from "react";

interface IDocumentProps {
  href: string;
}

export const Document: React.FC<IDocumentProps> = observer(({ href }) => {
  useEffect(() => {
    storeDocuments.fetchDocument(href);
  }, []);

  const path = storeDocuments.state.path;

  return (
    <div>
      {path && (
        <Image
          alt="Picture of the author"
          src={path}
          width={400}
          height={400}
          priority
        ></Image>
      )}
    </div>
  );
});
