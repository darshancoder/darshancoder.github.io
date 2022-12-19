import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { Box, Text, Stack, Spacer, Flex } from "@chakra-ui/react";

const TypeWriterPage = () => {
  return (
    <Stack fontFamily="sans-serif" mt="50px" id="home">
      <Box m="30px" mt="100px" ml="100px" textAlign="left">
        <Text color="white" fontSize={{base:"18px",md:"22px",lg:"24px"}}>Hello, my name is</Text>{" "}
        <Text mt="-5px" color="white" fontSize={{base:"2xl",sm:"3xl",md:"4xl",lg:"5xl"}}>
          Darshan
        </Text>
        <Flex>
          <Text fontSize={{base:"18px",md:"22px",lg:"24px"}}color="white">
            And I'm a
          </Text>
          <Text ml="10px" fontSize={{base:"18px",md:"22px",lg:"24px"}} color="red.500">
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
