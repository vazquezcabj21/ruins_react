import React from "react";
import image from '../assets/125264.jpg'
import { Stack, Image, Text } from "@chakra-ui/react";

const Frase = () => {
  let backgroundColor = "#3F51B5";
  return (
    <Stack alignItems={"center"} py = {[100, 100, 200]} px = {12} textAlign={"center"}>
      <Image
        src={image}
        borderRadius={"50%"}
        width={75}
      ></Image>
      <Text fontSize={[18, 24]}>
        La mayoría de las personas piensan que el diseño es una capa, una simple
        decoración. Para mí, nada es más importante en el futuro que el diseño.
        El diseño es el alma de todo lo creado por el hombre
      </Text>
      <Text backgroundColor={backgroundColor} p={4} color = {"#fff"}>Steve Jobs</Text>
      <Text fontStyle={"italic"}>CEO & Founder of Apple Inc.</Text>
    </Stack>
  );
};

export default Frase;
