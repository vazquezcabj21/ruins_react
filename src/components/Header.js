import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import "./Header.css";
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
        <Link to="/">
          <Text
            color={blanco}
            fontSize={20}
            letterSpacing={1.2}
            className="logo"
          >
            Ruins
          </Text>
        </Link>
      </Stack>
    </header>
  );
};

export default Header;
