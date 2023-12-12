"use client";

import { Button, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        padding: "10px 20px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h4" color="primary.main">
        YukDDong's Blog
      </Typography>
      <Button>toggle</Button>
    </Container>
  );
};

export default Header;
