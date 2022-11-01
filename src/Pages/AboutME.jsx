import React from "react";
import {
  VStack,
  HStack,
  Box,
  Image,
  Text,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const AboutME = () => {
  return (
    <>
      <VStack fontFamily="sans-serif" bg="black" style={{ marginTop: "-20px" }}>
        <Box>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="bold"
            mt="15px"
            mb="15px"
            textAlign="center"
          >
            About me
          </Text>
          <Box boxSize="150px" justifyContent="center">
            <Image
              src="https://avatars.githubusercontent.com/u/92500563?v=4"
              alt="Darshn Kale"
              borderRadius="5px"
            />
          </Box>
        </Box>
        <Stack>
        <Flex ><Text
            fontSize="16px"
            color="white"
            mb="10px">I'm Darshan Kale and I'm a</Text>
            <Text ml="10px" color="red.400" textAlign="left">
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
        </Stack>
      </VStack>
    </>
  );
};

export default AboutME;
