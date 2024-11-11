import { Box, Container } from "@mui/material";
import { Aside } from "../aside";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component={"main"}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "row" }}>
        <Aside />
        {children}
      </Container>
    </Box>
  );
}
