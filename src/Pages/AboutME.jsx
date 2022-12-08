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
import Resume from "../Download/Resume.pdf";
import Profile from "../Download/Profile7.png"
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

        <Box display="flex" m="20px">
          <Box>
            <Image
              h="180px"
              ml="50px"
              src={Profile}
              alt="Darshn Kale"
              borderRadius="5px"
            />
          </Box>
          <Box ml="130px"  textAlign="left" pr="10px">
            <Flex>
              <Text fontSize="20px" color="white" mb="10px">
                I'm Darshan Kale and I'm a
              </Text>
              <Text ml="10px" color="red.500" textAlign="left" fontSize="20px">
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

            <Stack h="100">
              <Text color="white" fontSize="18px" fontFamily="sans-serif">
                A passionate Developer proficient in Web architecture,
                HTML,CSS,JavaScript,React-JS,Chakra-UI,Redux,
                <br />
                TypeScript,MongoDB,NodeJS,Data Structures, and algorithms.
                Approchable team leader, always keen to <br />
                take the goal-oriented path to complete the tasks at
                hand.Strongly interested in obtaining a Developer position{" "}
                <br /> to create scalable products and work on providing a
                wow-user experience through them.
              </Text>
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
                <a href={cv} download="Darshan_Resume">Download CV</a>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutME;
