import React from "react";
import {Stack, Text} from '@chakra-ui/react';
import './Header.css'
const Header = () => {
  let backgroundColor = "#3F51B5";
  let blanco = "#fff";
  return (
    <header>
      <Stack
        p={8}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={backgroundColor}
      >
        <Text color={blanco} fontSize={20} letterSpacing={1.2} className="logo">Ruins</Text>
      </Stack>
    </header>
  );
};

export default Header;
