import React from 'react'
import { Stack,Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const VentajaItem = (props) => {
    let backgroundColor = "#3F51B5";
  return (
    <Stack textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
        <Icon as = {props.icon} fontSize={"80px"} color = {backgroundColor} ></Icon>
        <Text fontSize={"2xl"}>{props.title}</Text>
        <Text>{props.text}</Text>
    </Stack>
  )
}

export default VentajaItem