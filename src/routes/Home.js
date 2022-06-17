import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Subhero from "../components/Subhero";
import Ventajas from "../components/Ventajas";
import Frase from "../components/Frase";
import Descubrinos from "../components/Descubrinos";
import SeccionPlanes from "../components/SeccionPlanes";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Header className="header_font" />
      <Hero />
      <Subhero />
      <Ventajas />
      <Frase />
      <Descubrinos />
      <SeccionPlanes
        title={
          "Porque nuestro trabajo es de calidad,y lo hacemos por tu negocio."
        }
        subtitle={
          "En Ruins nuestros clientes son únicos y nuestro trabajo lo caracterizamos por la calidad que maneja. Vos proponés la idea, nosotros la cumplimos."
        }
      />
      <Footer />
    </div>
  );
};

export default Home;
