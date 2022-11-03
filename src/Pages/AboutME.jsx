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
import { Typewriter } from "react-simple-typewriter";
const AboutME = () => {
  return (
    <>
      <Box fontFamily="sans-serif" bg="black" style={{ marginTop: "-20px", paddingBottom:"50px"}} >
      
        <Box>
          <Text
            color="white"
            fontSize="26px"
            fontWeight="bold"
            mt="15px"
            mb="15px"
            textAlign="center"
          >
            About me
          </Text>
        </Box>

          <Box display="flex" m="20px">
          <Box  >
            <Image
             h="150px"
             ml="50px"
              src="https://avatars.githubusercontent.com/u/92500563?v=4"
              alt="Darshn Kale"
              borderRadius="5px"
            />
          </Box>
        <Box  ml="130px" w="600px" textAlign="left" pr="10px" >
          <Flex>
            <Text fontSize="16px" color="white" mb="10px">
              I'm Darshan Kale and I'm a
            </Text>
            <Text ml="10px" color="red.500" textAlign="left">
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
          <Spacer/>
       
          <Stack  h="100" >
          <Text color="white" fontSize="12px" fontFamily="sans-serif">
            A passionate Developer proficient in Web architecture,
            HTML,CSS,JavaScript,React-JS,Chakra-UI,Redux,<br/>TypeScript,MongoDB,NodeJS,Data
            Structures, and algorithms. Approchable team leader, always keen to <br/>
            take the goal-oriented path to complete the tasks at hand.Strongly
            interested in obtaining a Developer position <br/>  to create scalable
            products and work on providing a wow-user experience through them.
          </Text>
          <Button borderRadius="4px" p="3" size="sm" w="150px" fontSize="14x"  colorScheme='red'>
    <Link href="../Download/DK.txt" download="DK.txt">Download CV</Link>
  </Button>
          </Stack>
                  </Box>
        
</Box>

      </Box>
    </>
  );
};

export default AboutME;
