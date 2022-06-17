import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";

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
      <Stack p={4} spacing={4} direction = {["column", "column","row"]} alignItems={"center"} justifyContent={"center"}>
        <PlanCard
          border={"1px solid black"}
          titulo={"Plan Básico"}
          precio={"$5999"}
          contenido={
            "Nuestro plan básico incluye una landing page simple, de una sola página, adaptable a todas las plataformas. Sin mantenimiento"
          }
          colorButton = {"blackAlpha"}
        ></PlanCard>
        <PlanCard
          border={"1px solid green"}
          titulo={"Plan Intermedio"}
          precio={"$9499"}
          contenido={
            "Nuestro plan intermedio incluye una landing page de hasta 3 páginas, adaptable a todas las plataformas y con mantenimiento bimestral. "
          }
          colorButton = {"green"}
        ></PlanCard>
        <PlanCard
          border={"1px solid gold"}
          titulo={"Plan Gold"}
          precio={"$13999"}
          contenido={
            "Nuestro mejor plan incluye una página con las páginas que necesites, adaptable a todas las plataformas y mantenimiento cuando lo necesites."
          }
          colorButton = {"yellow"}
        ></PlanCard>
      </Stack>
      <Footer/>
    </Stack>
  );
};

export default Planes;
