import { Box, Container } from "@mui/material";
import { Aside } from "../aside";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component={"main"} flexGrow={1}>
      <Container maxWidth="lg" sx={{ display: "flex", height: "100%" }}>
        <Aside />
        {children}
      </Container>
    </Box>
  );
}
