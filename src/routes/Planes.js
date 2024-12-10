import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";
import { PLANS } from "./plans"

const Planes = () => {
  return (
    <Stack>
      <Header></Header>
      <Stack textAlign={"center"} py={6} px={[8, 8, "25ch"]}>
        <Text fontSize={30} fontWeight={"bold"}>
          Nuestros planes.
        </Text>
        <Text>
          Todos nuestros planes están sujetos a modificación de precios. Las
          modificaciones es en torno a textos/imágenes/fotos utilizadas dentro
          de las páginas web. No dude en consultar por cualquiera de nuestras
          redes acerca de esto.
        </Text>
      </Stack>
      <Stack
        p={4}
        spacing={4}
        direction={["column", "column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {PLANS.map((plan, index) => (
          <PlanCard
            key={index}
            border={plan.border}
            titulo={plan.titulo}
            precio={plan.precio}
            contenido={plan.contenido}
            colorButton={plan.colorButton}
            link={plan.link}
          />
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Planes;
