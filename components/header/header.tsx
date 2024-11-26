import { AppBar, Container, Toolbar, Typography } from "@mui/material";
export function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5">
            Приложение для работы с документами
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
