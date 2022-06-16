import React from "react";
import { Stack, Text } from "@chakra-ui/react";
const Subhero = () => {
  return (
    <Stack textAlign={["center", "center", "start"]} py={100} px={12}>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        En Ruins Design diseñamos tu página y te la entregamos lista para
        que la puedas usar.
      </Text>
      <Text fontSize={"xl"}>
        Porque nos interesa el diseño, y somos especialistas en los detalles.
      </Text>
    </Stack>
  );
};

export default Subhero;
