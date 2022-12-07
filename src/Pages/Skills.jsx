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

const Skills = () => {
  return (
    <>
    <Box
      style={{ marginTop: "-10px" }}
      pb="50px"
      
      fontFamily="sans-serif"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
    >
      <Box
        fontFamily="serif"
        fontSize="34px"
        color="white"
        mt={4}

        
      >
        Skills
      </Box>
      <Flex gap={40}>
        <Box ml="70px" width="450px" textAlign="left">
          {/*Text */}
          <Text color="whitesmoke" fontWeight="bold" fontSize="26px"  >
            My creative skills & experiences.
          </Text>
          <Text fontSize="19px" color="white" fontFamily="serif">
            I am Full-stack developer with a specialization in HTML,CSS,REST
            APIs, Git/Github,JavaScript,React,Redux,TypeScript,MongoDB,NodeJS.
            Self-motivated and curious to learn, with a keen interest in
            building user-centric products and 1000 hours of coding
            practice.Looking forward to sharpening my skills in challenging work
            environment.
          </Text>
          <Button
            borderRadius="4px"
            p="6"
            mt="8px"
            size="sm"
            fontSize="20px"
            colorScheme="green"
            bg="red"
            color="white"
          >
            Read More
          </Button>
        </Box>
        <Box ml="180px">
          {/* After Images  */}

          <Grid templateColumns="repeat(2, 250px)" gap={6}  >
              <GridItem boxShadow="dark-lg" rounded="sm" bg="white" h="130px" >
                <Flex m={4}>
                <Image  p={1} w="100px" src="https://codeguida.com/media/post_title/g3033.png" /> 
                <Text fontFamily="sans-serif" mt={8} pl="5" fontSize="19px" fontWeight="550">JavaScript</Text>
                </Flex>
              </GridItem>
            <GridItem boxShadow="dark-lg" rounded="sm" bg="white" h="130px" >
            <Flex m={4}>
                <Image  p={1} w="100px" alt="React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" /> 
                <Text fontFamily="sans-serif" mt={8} pl="5" fontSize="19px" fontWeight="550">React</Text>
                </Flex>
            </GridItem>
            <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}  mt="-10px">
                <Image   p={1} w="100px" alt="mongoDB" src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" /> 
                <Text fontFamily="sans-serif" mt={8}  fontSize="19px" fontWeight="550">MongoDB</Text>
                </Flex>
            </GridItem>
            <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}>
                <Image  p={1} w="100px" alt="nodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="2" fontSize="19px" fontWeight="550">NodeJS</Text>
                </Flex>
            </GridItem>
            <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}>
                <Image ml={"-15px"} p={1} w="140px" alt="nodeJS" src="https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic" /> 
                <Text  fontFamily="sans-serif" mt={4}  fontSize="19px" fontWeight="550">NodeJS</Text>
                </Flex>
            </GridItem>
            <GridItem boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}>
                <Image mt="-5px" w="80px" alt="nodeJS" src="https://cdn.worldvectorlogo.com/logos/redux.svg" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="5" fontSize="19px" fontWeight="550">Redux</Text>
                </Flex>
            </GridItem>
            <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}>
                <Image mt="-20px" w="100px" alt="nodeJS" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="4" fontSize="19px" fontWeight="550">HTML</Text>
                </Flex>
            </GridItem>
            <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={4}>
                <Image mt="-15px" w="80px" alt="nodeJS" src="https://w7.pngwing.com/pngs/509/571/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design.png" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="5" fontSize="19px" fontWeight="550">CSS</Text>
                </Flex>
            </GridItem>
            {/* <GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={2}>
                <Image mt="-15px" w="100px" alt="Chakra" src="https://pbs.twimg.com/profile_images/1257282259981234182/KUJHKmPi_400x400.jpg" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="2" fontSize="19px" fontWeight="550">Chakra-UI</Text>
                </Flex>
            </GridItem><GridItem  boxShadow="dark-lg" p="6" rounded="sm" bg="white" h="130px">
            <Flex m={2}>
                <Image mt="-15px" w="100px" alt="NPM" src="https://www.svgrepo.com/show/331509/npm.svg" /> 
                <Text  fontFamily="sans-serif" mt={4} pl="5" fontSize="19px" fontWeight="550">NPM</Text>
                </Flex>
            </GridItem> */}
          </Grid>
          
        </Box>
      </Flex>
      
    </Box>
    
    </>

    
  );
};

export default Skills;
