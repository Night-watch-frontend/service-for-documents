"use client";

import FolderIcon from "@mui/icons-material/Folder";
import styles from "./nav-aside.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography } from "@mui/material";

interface NavAside {
  href: string;
  title: string;
}

interface NavAsideProps {
  navLinks: NavAside[];
}

export function NavAside({ navLinks }: NavAsideProps) {
  const pathname = usePathname();
  const decodePath = decodeURIComponent(pathname);

  return (
    <>
      {navLinks.map((link) => {
        const isActive =
          decodePath === link.href ||
          decodePath === `${link.href}/${decodePath.split("/").pop()}`;

        return (
          <Link
            className={isActive ? styles.active : ""}
            key={link.title}
            href={link.href}
            style={{ display: "flex" }}
          >
            <FolderIcon color="inherit" sx={{ mr: 2 }} />

            <Typography component={"span"}>{link.title}</Typography>
          </Link>
        );
      })}
    </>
  );
}
