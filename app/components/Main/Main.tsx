"use client";

import { Container } from "@mui/material";
import SideBar from "../SideBar/SideBar";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "blue",
        padding: "0px",
        paddingLeft: 0,
      }}
    >
      <SideBar />
    </Container>
  );
};

export default Main;
