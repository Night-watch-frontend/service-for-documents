"use client";
import { Divider } from "@/components/divider";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { storeDocuments } from "@/store/store";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";

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
      <ul>
        {listDocs.map((item: { name: string; path: string }) => {
          return (
            <li key={item.name}>
              <Link
                href={`/${
                  item.path ? item.path.split("/").slice(2).join("/") : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Box>
  );
});

export default Home;
