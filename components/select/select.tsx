"use client";
import { storeDocuments } from "@/store/store";
import { Button, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface ISelectMoveProps {
  values: {
    name: string;
  }[];
}

export default function SelectMove({ values }: ISelectMoveProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const path = usePathname();
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (to: string) => {
    const nameDocument = path.split("/").pop();
    setAnchorEl(null);
    storeDocuments.move(path, `/${to}/${nameDocument}`);
    router.back();
  };
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        переместить документ
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {values.map((value) => (
          <MenuItem key={value.name} onClick={() => handleClose(value.name)}>
            {value.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
