import { Box,Stack,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import {BsLinkedin} from "react-icons/bs"

const Contact = () => {
  return (
    <Box fontFamily="sans-serif"
    bg="black"
    h="auto"
    fontWeight={600}
    style={{ marginTop: "-20px", paddingBottom: "50px" }}>
    {/* <Box  >
        <Text textShadow="1px 1.5px red"  color="white" fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}>Contact</Text>
        <Text color="blue.300">Get in touch</Text>
    </Box>
    <Stack p="50px" color="white">
    <Text fontSize={{base:"20px",md:"22px",xl:"24px"}} pl={40} textAlign="left" color="white">Get in Touch</Text>
    
    <Text>If my work and skills attracts you, feel free to connect with me. I would love to talk and work with you.</Text>
    <Flex>
      <Box>
        <a href='www.linkedin.com/in/darshan-kale-264335171'> <BsLinkedin/></a>
       
      </Box>
      <Box></Box>

    </Flex>
    </Stack> */}
    </Box>
  )
}

export default Contact
