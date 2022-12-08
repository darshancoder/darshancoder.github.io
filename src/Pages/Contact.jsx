import { Box } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <Box fontFamily="sans-serif"
    bg="black"
    h="auto"
    fontWeight={600}
    style={{ marginTop: "-20px", paddingBottom: "50px" }}>
    <Box fontSize={{base:"2xl",md:"3xl",lg:"4xl"}} textShadow="1px 1.5px red" >
        Contact
    </Box>
      
    </Box>
  )
}

export default Contact
