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
import Resume from "../Download/Resume1.pdf";
import Profile from "../Download/Profile7.png";
import { Typewriter } from "react-simple-typewriter";
export const AboutME = () => {
  const cv = Resume;
  return (
    <div id="about">
      <Box
        fontFamily="sans-serif"
        bg="black"
        h="auto"
        style={{ marginTop: "-20px", paddingBottom: "50px" }}
      >
        <Box>
          <Text
            color="white"
            fontWeight={600}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mt="15px"
            mb="15px"
            textAlign="center"
          >
            About me
          </Text>
        </Box>

        <Flex
          flexDirection={["column", "column", "column", "row"]}
          border="1px solid red"
          display="flex"
          m="20px"
          alignItems={"center"}
          gap="105px"
          justifyContent={"center"}
        >
          <Flex border="2px solid white" justifyContent={"center"}>
            <Image
              h="180px"
              src={Profile}
              alt="Darshn Kale"
              borderRadius="5px"
            />
          </Flex>
          <Box
            // border="1px solid yellow"
            mx="20px"
            style={{ textAlign: "justify" }}
            w="50%"
          >
            <Flex>
              <Text fontSize="20px" color="white" mb="10px">
                I'm Darshan Kale and I'm a
              </Text>
              <Text color="red.500" fontSize="20px" ml={"10px"}>
                <Typewriter
                  loop
                  cursor
                  cursorStyle="__"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "Programmer",
                    "Developer",
                    "Front-End Developer",
                    "Backend-Developer",
                    "Full Stack Developer",
                  ]}
                />
              </Text>
            </Flex>
            <Spacer />

            <Box>
              <Text
                color="white"
                fontFamily="sans-serif"
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
              >
                A passionate Developer proficient in Web architecture,
                HTML,CSS,JavaScript,React-JS,Chakra-UI,Redux,
                TypeScript,MongoDB,NodeJS,Data Structures, and algorithms.
                Approchable team leader, always keen to take the goal-oriented
                path to complete the tasks at hand.Strongly interested in
                obtaining a Developer position to create scalable products and
                work on providing a wow-user experience through them.
              </Text>
            </Box>
          </Box>
        </Flex>
       <Box w={[400, "95%", "80%"]}>
       <Button
          className="glow-on-hover"
          borderRadius="4px"
          p="5"
          size="sm"
          w="150px"
          fontSize="15x"
          colorScheme="blue"
          bg="red"
          color="white"
        >
          <a href={cv} download="Darshan_Resume">
            Download CV
          </a>
        </Button>
       </Box>
      </Box>
    </div>
  );
};

export default AboutME;
