"use client";
import { Divider } from "@/components/divider";
import Link from "next/link";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
const Page = observer(({ params }: { params: { slug: string } }) => {
  const decodeTitle = decodeURIComponent(params.slug);

  useEffect(() => {
    storeDocuments.fetchDocuments(decodeTitle);
  }, []);

  const items = storeDocuments.state.documents;
  const title = storeDocuments.state.title;

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography component="h2" variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
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
    </Box>
  );
});

export default Page;
