"use client";
import { Divider } from "@/components/divider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { storeDocuments } from "@/store/store";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { TableDocuments } from "@/components/table";

const Home = observer(() => {
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      storeDocuments.fetchAllDocuments();
    }
  }, [path]);

  const listDocs = storeDocuments.state.documents;

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography component="h2" variant="h6" sx={{ fontWeight: "bold" }}>
        Все документы
      </Typography>
      <Divider />
      <TableDocuments rows={{ rows: listDocs, href: "" }} />
    </Box>
  );
});

export default Home;
