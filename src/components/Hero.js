import React from 'react'
import './Hero.css'
import { Text,Stack } from '@chakra-ui/react'
const Hero = () => {
  return (
    <Stack className='imagen-principal' justifyContent={"center"} textAlign={"center"}>
        <Text fontSize={'5xl'}>Creamos tu página web. Creamos confianza.</Text>
    </Stack>
  )
}

export default Hero