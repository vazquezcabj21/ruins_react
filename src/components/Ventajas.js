import React from "react";
import VentajaItem from "./VentajaItem";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CodeIcon from "@mui/icons-material/Code";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Stack } from "@chakra-ui/react";

const Ventajas = () => {
  return (
    <Stack direction={["column", "column", "row"]} px={20} spacing={20}>
      <VentajaItem
        icon={FlightTakeoffIcon}
        text={
          "Nos mostrás tu idea y la creamos. Tenés tu página web con el mejor diseño, funcionando en cualquier parte del mundo."
        }
        title={"Ventajas en todo el mundo"}
      />
      <VentajaItem
        icon={CodeIcon}
        text={
          "La página web de tu negocio, disponible en todos los dipositivos que se te ocurran, y con todas sus funcionalidades."
        }
        title={"Adaptabilidad responsiva"}
      />
      <VentajaItem
        icon={ColorLensIcon}
        text={
          "Adaptamos las ideas de clientes. Queremos que quedes satisfecho con el producto que tenemos para ofrecerte."
        }
        title={"Líderes en diseño"}
      />
    </Stack>
  );
};

export default Ventajas;
