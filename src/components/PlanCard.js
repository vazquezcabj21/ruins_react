import { Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import React from "react";

const PlanCard = (props) => {
  return (
    <Stack
      border={props.border}
      textAlign={"center"}
      maxW={["100%", "100%", "33%"]}
      borderRadius={20}
      justifyContent={"center"}
      alignItems={"center"}
      pb={4}
    >
      <Text fontWeight={"bolder"} pt={6}>
        {props.titulo}
      </Text>
      <Text px={6} py={2}>
        {props.contenido}
      </Text>
      <Link href={props.link}>
        <Button colorScheme={props.colorButton}>{props.precio}</Button>
      </Link>
    </Stack>
  );
};

export default PlanCard;
