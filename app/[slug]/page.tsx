"use client";
import { Divider } from "@/components/divider";
import { storeDocuments } from "@/store/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { TableDocuments } from "@/components/table";
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
      {items.length ? (
        <TableDocuments rows={{ rows: items, href: params.slug }} />
      ) : (
        <p>Нет документов</p>
      )}
    </Box>
  );
});

export default Page;
