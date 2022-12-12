import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {BsCodeSlash} from "react-icons/bs"
import {GrView} from "react-icons/gr"
import imgFiver from "../Download/fiver.png";
export const Projects = () => {
  const obj = [
    {
      heading: "Freelancing Website",
      img: imgFiver,
      desc: "Trouper.com is a freelancing website where users and appoint freelancer for projects or can register as freelancer to provide service like graphics & design  etc. ",
    },
    
  ];

  return (
    <div id="about">
      <Box
        fontFamily="sans-serif"
        bg="black"
        h="auto"
        fontWeight={600}
        style={{ marginTop: "-20px", paddingBottom: "50px" }}
      >
        <Box
          textAlign="center"
          color="white"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textShadow="1px 1px red"
        >
          Projects
        </Box>

        {obj.map((el) => (
          <Grid gap={4} templateColumns="repeat(4,1fr)">
            <GridItem color="white">
              <Box
                border="1px solid White"
                id="hover-2"
                w="300px"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Flex flexDirection="column" gap={3}>
                  <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    {el.heading}
                  </Text>
                  <Image m="auto" justify="center" w="270px" src={el.img} />
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "18px" }}
                    lineHeight="-4"
                  >
                    {el.desc}
                  </Text>
                </Flex>
                <Flex
                  m="auto"
                  justifyContent="space-evenly"
                  alignItems="center"
                  gap={5}
                  mt="15px"
                  mb="10px"
                  justify="space-evenly"
                  
                >
                  <Button bg="whatsapp.700" fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}><BsCodeSlash/></Button>
                  <Button bg="tomato" fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}><GrView/></Button>
                </Flex>
              </Box>
            </GridItem>
            <GridItem color="white">
              <Box
                border="1px solid White"
                w="300px"
                id="hover-2"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Flex flexDirection="column" gap={3}>
                  <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    {el.heading}
                  </Text>
                  <Image m="auto" justify="center" w="270px" src={el.img} />
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "18px" }}
                    lineHeight="-4"
                  >
                    {el.desc}
                  </Text>
                </Flex>
                <Flex
                  m="auto"
                  justifyContent="center"
                  alignItems="center"
                  gap={5}
                  mt="15px"
                  mb="10px"
                >
                  <Button bg="whatsapp.700">Github Link</Button>
                  <Button bg="tomato">Demo Link</Button>
                </Flex>
              </Box>
            </GridItem>
            <GridItem color="white">
              <Box
                id="hover-2"
                border="1px solid White"
                w="300px"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Flex flexDirection="column" gap={3}>
                  <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    {el.heading}
                  </Text>
                  <Image m="auto" justify="center" w="270px" src={el.img} />
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "18px" }}
                    lineHeight="-4"
                  >
                    {el.desc}
                  </Text>
                </Flex>
                <Flex
                  m="auto"
                  justifyContent="center"
                  alignItems="center"
                  gap={5}
                  mt="15px"
                  mb="10px"
                >
                  <Button bg="whatsapp.700">Github Link</Button>
                  <Button bg="tomato">Demo Link</Button>
                </Flex>
              </Box>
            </GridItem>
            <GridItem color="white">
              <Box
                id="hover-2"
                border="1px solid White"
                w="300px"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Flex flexDirection="column" gap={3}>
                  <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    {el.heading}
                  </Text>
                  <Image m="auto" justify="center" w="270px" src={el.img} />
                  <Text
                    fontSize={{ base: "12px", md: "16px", lg: "18px" }}
                    lineHeight="-4"
                  >
                    {el.desc}
                  </Text>
                </Flex>
                <Flex
                  m="auto"
                  justifyContent="center"
                  alignItems="center"
                  gap={5}
                  mt="15px"
                  mb="10px"
                >
                  <Button bg="whatsapp.700">Github Link</Button>
                  <Button bg="tomato">Demo Link</Button>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        ))}
      </Box>
    </div>
  );
};
