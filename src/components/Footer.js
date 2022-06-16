import React from "react";
import { Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack textAlign={"center"} pt ={20} pb={6}> 
      <Text fontSize={"sm"}>Marca Registrada - Buenos Aires, Argentina</Text>
      <Text fontSize={"xs"}>Creado y desarrollado por @Ruins Design © Ruins - 2022</Text>
    </Stack>
  );
};

export default Footer;
