import { Divider } from "@/components/divider";
import { Document } from "@/components/view-document";
import { Box, Typography } from "@mui/material";

export default async function Page({
  params,
}: {
  params: { slug: string; path: string };
}) {
  const path = `${params.slug}/${params.path}`;

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFF", p: "10px" }}>
      <Typography component="h2" variant="h6" sx={{ fontWeight: "bold" }}>
        {"Документ"}
      </Typography>
      <Divider />
      <Document href={path} />
    </Box>
  );
}
