import { DataDocument } from "@/api/types-api";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

interface IRowProps {
  rows: DataDocument[];
  href: string;
}

export const TableDocuments = ({ rows }: { rows: IRowProps }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 650 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Превью</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.rows.length > 0 &&
            rows.rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Link
                    href={`/${
                      row.path
                        ? row.path.split("/").slice(2).join("/")
                        : rows.href + "/" + row.name
                    }`}
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Image
                    src={row.preview}
                    width={30}
                    height={40}
                    alt={row.name}
                    unoptimized={true}
                  ></Image>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
