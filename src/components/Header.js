import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
const Header = () => {
  let backgroundColor = "#3F51B5";
  let blanco = "#fff";
  return (
    <header>
      <Stack
        p={4}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={backgroundColor}
      >
        <Link to="/">
          <Text
            color={blanco}
            fontSize={32}
            letterSpacing={1.2}
            className="logo"
          >
            Ruins Design
          </Text>
        </Link>
      </Stack>
    </header>
  );
};

export default Header;
