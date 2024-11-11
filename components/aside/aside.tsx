"use client";
import { observer } from "mobx-react-lite";
import { NavAside } from "../navigation-aside";
import styles from "./aside.module.css";
import { useEffect } from "react";
import { storeDocuments } from "@/store/store";
import { List, ListItem, Typography, Box } from "@mui/material";
import { Divider } from "../divider";

const Aside = observer(() => {
  useEffect(() => {
    storeDocuments.fetchCategories();
  }, []);

  const items = storeDocuments.state.listCategories;

  return (
    <Box
      component="aside"
      sx={{ width: "30%", p: "10px", backgroundColor: "#FFF", mr: "2px" }}
    >
      <Typography
        variant="subtitle1"
        component="h3"
        sx={{ color: "#000", fontWeight: "bold" }}
      >
        Категории документов
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <NavAside navLinks={[{ title: "Все документы", href: "/" }]} />
        </ListItem>
        {items.map((item) => (
          <ListItem key={item.name} className={styles.item}>
            <NavAside
              navLinks={[{ title: item.name, href: `/${item.name}` }]}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export { Aside };
