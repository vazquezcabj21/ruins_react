import React from "react";
import { Stack, Button } from "@chakra-ui/react";
const Descubrinos = () => {
    let backgroundColor = "#3F51B5";
  return (
    <Stack justifyContent={"center"} alignItems={"center"} backgroundColor={backgroundColor} p={6}>
      <Button colorScheme="blackAlpha" m={20}>
       DESCUBRINOS
      </Button>
    </Stack>
  );
};

export default Descubrinos;
