import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Stack,
  Spacer,
  Button,
  Link,
} from "@chakra-ui/react";

export const Projects = () => {
 


  return (
    <div id="about">
      <Box
        fontFamily="sans-serif"
        bg="black"
        h="auto"
        fontWeight={600}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        style={{ marginTop: "-20px", paddingBottom: "50px" }}
      >
        <Box textAlign="center" color="white">Projects</Box>
      </Box>
    </div>
  );
};


