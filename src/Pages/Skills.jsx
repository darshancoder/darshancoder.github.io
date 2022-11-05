import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

import Marquee from "react-fast-marquee"

const Skills = () => {
  return (
    <>
    <Box
      style={{ marginTop: "-10px" }}
      pb="50px"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
    >
      <Box
        fontFamily="sans-serif"
        fontSize="28px"
        color="white"
        textAlign="center"
      >
        Skills
      </Box>
      <Flex gap={40}>
        <Box ml="50px" width="450px" textAlign="left">
          {/*Text */}
          <Text color="whitesmoke" fontWeight="bold">
            My creative skills & experiences.
          </Text>
          <Text fontSize="12px" color="white" fontFamily="sans-serif">
            I am Full-stack developer with a specialization in HTML,CSS,REST
            APIs, Git/Github,JavaScript,React,Redux,TypeScript,MongoDB,NodeJS.
            Self-motivated and curious to learn, with a keen interest in
            building user-centric products and 1000 hours of coding
            practice.Looking forward to sharpening my skills in challenging work
            environment.
          </Text>
          <Button
            borderRadius="4px"
            p="3"
            mt="5px"
            size="sm"
            fontSize="14x"
            colorScheme="red"
          >
            Read More
          </Button>
        </Box>
        <Box>
          {/* After Images  */}

          <Grid templateColumns="repeat(2, 100px)" gap={6}>
              <GridItem boxShadow="dark-lg" w="150px" rounded="sm" bg="white">
                <Image w="50px" src="https://codeguida.com/media/post_title/g3033.png" /> <Text>JavaScript</Text>
              </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
                dark-lg
              </Box>
            </GridItem>
          </Grid>
          
        </Box>
      </Flex>
      
    </Box>
    <Marquee>
          <Box boxShadow="dark-lg" p="6" rounded="sm" bg="white">
          <Image w="50px" src="https://codeguida.com/media/post_title/g3033.png" /> <Text>JavaScript</Text>

              </Box>

          </Marquee>
    </>

    
  );
};

export default Skills;
