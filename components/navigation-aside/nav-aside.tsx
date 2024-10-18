"use client";

import styles from "./nav-aside.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        const isActive = decodePath === link.href;

        return (
          <Link
            className={isActive ? styles.active : ""}
            key={link.title}
            href={link.href}
          >
            {link.title}
          </Link>
        );
      })}
    </>
  );
}
