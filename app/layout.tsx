import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { Container, Paper } from "@mui/material";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";

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
            <div
              style={{
                display: "flex",
              }}
            >
              <SideBar />
              <div
                style={{
                  flex: 1,
                  width: "auto",
                  height: "auto",
                }}
              >
                {children}
              </div>
            </div>
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
