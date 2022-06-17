import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Descubrinos = () => {
  let backgroundColor = "#3F51B5";
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={backgroundColor}
      p={6}
    >
      <Link to="/plans">
        <Button colorScheme="blackAlpha" m={20}>
          DESCUBRINOS
        </Button>
      </Link>
    </Stack>
  );
};

export default Descubrinos;
