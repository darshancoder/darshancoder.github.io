import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { Box, Text, Stack, Spacer, Flex } from "@chakra-ui/react";

const TypeWriterPage = () => {
  return (
    <Stack fontSize="20px" fontFamily="sans-serif">
      <Box m="30px" mt="100px" ml="100px" textAlign="left">
        <Text color="white">Hello, my name is</Text>{" "}
        <Text mt="-5px" color="white" fontSize="40px">
          Darshan
        </Text>
        <Flex>
          <Text fontSize="20px" color="white">
            And I'm a
          </Text>
          <Text ml="10px" fontSize="20px" color="red.500">
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
      </Box>
    </Stack>
  );
};

export default TypeWriterPage;
