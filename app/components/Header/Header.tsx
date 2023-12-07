"use client";

import * as S from "./Header.style";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <S.HeaderContainer>
      <h1>YukDDong's Blog</h1>
      <Button>toggle</Button>
    </S.HeaderContainer>
  );
};

export default Header;
