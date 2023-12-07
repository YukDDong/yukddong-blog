import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "YukDDong 블로그",
  description: "YukDDong의 개발 경험을 기록하는 블로그입니다!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Container maxWidth="lg">
            <Header />
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
