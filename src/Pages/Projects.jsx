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
import { BsCodeSlash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import imgFiver from "../Download/fiver.png";
import Gym from "../Download/Gym.png";
import Autoshop from "../Download/Autoshop.png";
import Banggood from "../Download/banggood.png";
import Bellveta from "../Download/Bellveta.png";
import Jiomart from "../Download/Jiomart.png";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
const ProjectArr = [
  {
    project: "Fiver.com",
    url: imgFiver,
    description:
      "Trouper.com is a freelancing website where users and appoint freelancer for projects or can register as freelancer to provide various services ",
    github: "https://github.com/mr-ashu/Trouper",
    live: "https://jazzy-lokum-73584a.netlify.app/",
    video:
      "https://drive.google.com/file/d/1P9jE0TUlQS84a_H9uvOYaGyvdo7ediaF/view",
    stacks: [
      <AiOutlineHtml5 />,
      <DiCss3 />,
      <RiReactjsFill />,
      <SiChakraui />,
      <DiMongodb />,
      <IoLogoNodejs />,
    ],
  },
  {
    project: "Advanceautoparts.com",
    url: Autoshop,
    description:
      "The website,Advanceautoparts.com, allows customers to search for and purchase products online, as well as access information on store locations, hours, and services. ",
    github: "https://github.com/darshancoder/-cumbersome-things-27",
    live: "https://majestic-cobbler-7ab732.netlify.app/",
    video:
      "https://drive.google.com/file/d/1fk2AzuJ1lPopo7l0sENVVTTIdQNEsIwx/view",
    stacks: [
      <AiOutlineHtml5 />,
      <DiCss3 />,
      <RiReactjsFill />,
      <SiChakraui />,
      <DiMongodb />,
      <IoLogoNodejs />,
    ],
  },
  {
    project: "JioMart.com",
    url: Jiomart,
    description:
      "The website, Jiomart.com, allows customers to purchase products online and get them delivered to their doorstep. ",
    github: "https://github.com/darshancoder/Jio-Mart-Clone-",
    live: "https://glittering-kleicha-186978.netlify.app/",
    video: "",
    stacks: [
      [
        <AiOutlineHtml5 />,
        <DiCss3 />,
        <RiReactjsFill />,
        <SiChakraui />,
        <DiMongodb />,
        <IoLogoNodejs />,
      ],
    ],
  },
  {
    project: "BellaVitaOrganic.com",
    url: Bellveta,
    description:
      "BellaVitaOrganic.com is an e-commerce website that specializes in selling organic health and wellness products. They offer a wide range of products including supplements, skincare, and beauty products. ",
    github: "https://github.com/sahtejkumar/dreary-hand-8237",
    live: "https://fastidious-donut-e7ac40.netlify.app/",
    video: "",
    stacks: [<AiOutlineHtml5 />, <DiCss3 />, <TbBrandJavascript />],
  },
  {
    project: "Banggood.com",
    url: Banggood,
    description:
      "Banggood.in is an online retail store that sells various products at competitive prices with frequent discounts and free/low-cost shipping to India, and has customer service support.",
    github: "https://github.com/Kunal-Ladhani/Banggood-Clone",
    live: "https://banggood-clone-masai.netlify.app/",
    video: "",
    stacks: [<AiOutlineHtml5 />, <DiCss3 />, <TbBrandJavascript />],
  },
  {
    project: "MasterGYM.Com",
    url: Gym,
    description:
      "Master Gym website offers workout plans and fitness resources for all levels. Users can create personalized plans and track progress and videos on fitness and nutrition. ",
    github: "https://github.com/mr-ashu/Trouper",
    live: "https://wondrous-youtiao-36cb12.netlify.app/",
    video: "",
    stacks: [<AiOutlineHtml5 />, <DiCss3 />],
  },
];
export const Projects = () => {
  return (
    <div id="project">
      <Box
        fontFamily="sans-serif"
        bg="black"
        h="auto"
        fontWeight={600}
        style={{ marginTop: "-25px", paddingBottom: "50px" }}
      >
        <Box
          textAlign="center"
          color="white"
          mb={"10px"}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          textShadow="1px 1px red"
          
        >
          Projects
        </Box>

        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={4}
        >
          {ProjectArr.map((el, i) => (
            <GridItem color="white">
              <Box
                key={i}
                border="1px solid White"
                id="hover-2"
                w="300px"
                justifyContent="center"
                alignItems="center"
                m="auto"
              >
                <Flex flexDirection={"column"} alignItems={"center"} gap={6}>
                  <Image
                    border={"1px solid black"}
                    borderRadius="6px"
                    src={el.url}
                  />
                  <Text textAlign={"center"} fontSize={"22px"}>
                    {el.project}{" "}
                  </Text>

                  <Text textAlign={"center"} mt="-8px">
                    {" "}
                    {el.description}
                  </Text>
                  <Flex alignItems={"center"}>
                    Tech Stacks :
                    <Flex
                      fontSize={"35px"}
                      // border={"1px solid black"} gap={3}
                    >
                      {el.stacks?.map((element) => element)}
                    </Flex>
                  </Flex>

                  <Flex
                    gap={3}
                    fontSize={"25px"}
                    w="60%"
                    mb={"7px"}
                    justifyContent={"space-around"}
                  >
                    <Button
                      bg="tomato"
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                      <a target="blank" href={el.live}>
                        <GrView />
                      </a>
                    </Button>

                    <Button
                      bg="whatsapp.700"
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                      <a target="blank" href={el.github}>
                        <BsCodeSlash />
                      </a>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

{
  /* <Flex flexDirection="column" gap={3}>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                  Freelancing Website
                </Text>
                <Image m="auto" justify="center" w="270px" src={imgFiver} />
                <Text
                  fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                  lineHeight="-4"
                >
                  Trouper.com is a freelancing website where users and appoint
                  freelancer for projects or can register as freelancer to
                  provide various services .
                </Text>
                <Box gap={3} p="">
                  <span>Tech Stacks:-</span>
                  <Button>React</Button>
                  <Button>Node.js</Button>
                  <Button>Redux</Button>
                  <Button>Express</Button>
                  <Button>MongoDB</Button>
                  <Button>Chakra-UI</Button>
                </Box>
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
                <Button
                  bg="whatsapp.700"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                >
                  <a target="blank" href="https://github.com/mr-ashu/Trouper">
                    <BsCodeSlash />
                  </a>
                </Button>
                <Button
                  bg="tomato"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                >
                  <a
                    target="blank"
                    href="https://jazzy-lokum-73584a.netlify.app/"
                  >
                    <GrView />
                  </a>
                </Button>
              </Flex> */
}
