import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <>
      <Box 
      id="skill"
        style={{ marginTop: "-10px" }}
        pb="50px"
        fontFamily="sans-serif"
        bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
      >
        <Box
          fontFamily="sans-serif"
          fontWeight={600}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          color="white"
          p={8}
          justifyContent="center"
        >
         Technical Skills
        </Box>
        {/*  */}
        <Flex gap={40} flexDirection={["column", "column", "column", "row"]} >
<Flex>          <Box ml="70px" w={[300, 400, 500]} textAlign="left">
            {/*Text */}
            <Text
              color="whitesmoke"
              fontWeight="bold"
              fontSize={{ base: "20px", md: "24px", lg: "32px" }}
            >
              My creative skills & experiences.
            </Text>
            <Box w={["90%", "90%", "90%"]}>
            <Text
           
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              color="white"
              fontFamily="sans-serif"
            >
              I am Full-stack developer with a specialization in HTML,CSS,REST
              APIs, Git/Github,JavaScript,React,Redux,TypeScript,MongoDB,NodeJS.
              Self-motivated and curious to learn, with a keen interest in
              building user-centric products and 1000 hours of coding
              practice.Looking forward to sharpening my skills in challenging
              work environment.
            </Text>
            </Box>
            <Button
              className="glow-on-hover"
              borderRadius="4px"
              p="6"
              mt="8px"
              size="sm"
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              colorScheme="green"
              bg="red"
              color="white"
            >
            {/* <a href="#about">Read More<a/> */}
            <Link to="about" smooth={true} duration={"600"}>Read More</Link>
            </Button>
          </Box></Flex>
          {/* <Box > */}
            {/* After Images  */}
{/*     
            <Grid templateColumns="repeat(2, 250px)" column={{base:1, md:2, lg:2}} gap={6} color="black">
              <GridItem
                id="hover-3"
                rounded="sm"
                bg="white"
                h="130px"
                _hover={{
                  bg: "blue.500",
                  boxShadow: "dark-lg",
                  color: "white",
                }}
                color="black"
              >
                <Box>
                  <Flex m={4}>
                    <Image
                      p={1}
                      w="100px"
                      src="https://codeguida.com/media/post_title/g3033.png"
                    />
                    <Text
                      fontFamily="sans-serif"
                      mt={8}
                      pl="5"
                      fontSize="19px"
                      fontWeight="550"
                    >
                      JavaScript
                    </Text>
                  </Flex>
                </Box>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    p={1}
                    w="100px"
                    alt="React"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={8}
                    pl="5"
                    fontSize="19px"
                    fontWeight="550"
                  >
                    React
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4} mt="-10px">
                  <Image
                    p={1}
                    w="100px"
                    alt="mongoDB"
                    src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={8}
                    fontSize="19px"
                    fontWeight="550"
                  >
                    MongoDB
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    p={1}
                    w="100px"
                    alt="nodeJS"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={4}
                    pl="2"
                    fontSize="19px"
                    fontWeight="550"
                  >
                    NodeJS
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    ml={"-15px"}
                    p={1}
                    w="140px"
                    alt="nodeJS"
                    src="https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={4}
                    fontSize="19px"
                    fontWeight="550"
                  >
                    NodeJS
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    mt="-5px"
                    w="80px"
                    alt="nodeJS"
                    src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={4}
                    pl="5"
                    fontSize="19px"
                    fontWeight="550"
                  >
                    Redux
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    mt="-20px"
                    w="100px"
                    alt="nodeJS"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={4}
                    pl="4"
                    fontSize="19px"
                    fontWeight="550"
                  >
                    HTML
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                id="hover-3"
                boxShadow="dark-lg"
                p="6"
                rounded="sm"
                bg="white"
                h="130px"
              >
                <Flex m={4}>
                  <Image
                    mt="-15px"
                    w="80px"
                    alt="nodeJS"
                    src="https://w7.pngwing.com/pngs/509/571/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design.png"
                  />
                  <Text
                    fontFamily="sans-serif"
                    mt={4}
                    pl="5"
                    fontSize="19px"
                    fontWeight="550"
                  >
                    CSS
                  </Text>
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
            {/* </Grid> */} 
          {/* </Box> */}
          <SimpleGrid
          width={["50%", "30%", "50%", "30%"]}
          margin={"auto"}
          columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
          gap={5}
        >
          {/* ; */}
          <GridItem
            borderRadius={"5px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
            bg="white" 
            py={"10%"}
            id="hover-3"
            align={"center"}
          >
            <img
              width="50%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem
            borderRadius={"5px"}
            id="hover-3"
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
          >
            <img
              width="35%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://avatars3.githubusercontent.com/u/1371101?v=4"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="45%"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            pl="20px"
            align={"center"}
            justify={"center"}
          >
            <img
              width="100%"
              src="https://i.ibb.co/s150G6V/express-logo-removebg-preview.png"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img width="50%" src="https://i.ibb.co/X4d9v9J/nodejs.png" alt="" />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img width="50%" src="https://i.ibb.co/3NpGM9K/git.png" alt="" />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
            boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="60%"
              // src="https://i.ibb.co/WfjsWyz/chakra-ui.png"
              src="https://i.ibb.co/GWCyMfQ/chakra-ui-removebg-preview.png"
              alt=""
            />
          </GridItem>
          <GridItem
          id="hover-3"
            borderRadius={"5px"}
             boxShadow={
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
             bg="white" 
            py={"10%"}
            align={"center"}
            justify={"center"}
          >
            <img
              width="40%"
              src="https://i.ibb.co/HXPmTLz/download-2.png"
              alt=""
            />
          </GridItem>
        </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
};

export default Skills;
