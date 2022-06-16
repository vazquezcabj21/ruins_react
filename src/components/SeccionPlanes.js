import React from "react";
import { Stack, Text, Image, Button}from "@chakra-ui/react";
import Imagen from "../assets/background-main.webp";


const SeccionPlanes = (props) => {
  return (
    <Stack direction={["column","column","column", "row"]}alignItems={"center"} justifyContent={"center"} px={[0,0,40]} py={20}>
     
        <Image boxSize = {["100%","100%","100%","50%"]}src={Imagen} objectFit={"cover"}></Image>
      <Stack px={12} textAlign={"center"} justifyContent ={"center"} alignItems={"center"}>
        <Text fontSize={'3xl'}>{props.title}</Text>
        <Text>{props.subtitle}</Text>
        <Button className="class-button" colorScheme = {"facebook"}>VER PLANES</Button>
      </Stack>
    </Stack>
  );
};

export default SeccionPlanes;
