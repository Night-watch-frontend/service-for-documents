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

interface IRowProps {
  rows: DataDocument[];
  href: string;
}

export const TableDocuments = ({ rows }: { rows: IRowProps }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Действия</TableCell>
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
                <TableCell>3</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
