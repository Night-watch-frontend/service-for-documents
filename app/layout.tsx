import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Приложение для работы с документами",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
