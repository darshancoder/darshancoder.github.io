import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import Resume from "../Download/Resume1.pdf";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import AboutME from "./AboutME";
import Skills from "./Skills";
import TypeWriterPage from "./TypeWriterPage";
import { Projects } from "./Projects";
import GitCalender from "./GitCalender";
import Contact from "./Contact";



export default function MainNavbar() {
  const cv = Resume;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    window.open(cv, "_blank");
}


  return (
    <Box bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)" h="1200px">
      <Box bg={"black"} px={4} position="fixed" width="full">
        <Flex h={16}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
          >
            <Box>
              {" "}
              <Flex>
                <Box ml="100px">
                  <Text
                    fontFamily="BesterMindRegular"
                    as="i"
                    textAlign="left"
                    color="white"
                    ml="5px"
                    fontSize={{
                      base: "26px",
                      sm: "26px",
                      md: "28px",
                      lg: "36px",
                    }}
                  >
                    Darshan <span style={{ color: "red" }}>Kale</span>
                  </Text>
                </Box>
              </Flex>
            </Box>
            <HStack
              as={"nav"}
              ml="50%"
              spacing={8}
              color="white"
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              
              display={{ base: "none", md: "flex" }}
            >
              <Link duration={700} smooth={true} to="home" className="l1" >Home</Link>
              <Link duration={700} smooth={true} to="about" className="l1"  >About</Link>
              <Link duration={700} smooth={true} to="skill"  className="l1" >Skills</Link>
              <Link duration={700} smooth={true} to="project" className="l1" >Projects</Link>
              <Link duration={700} smooth={true} to="contact" className="l1" >Contact</Link>
              {/* <a href={cv} id="resume" download="Darshan_Resume" > */}
            <a href={cv} target="_blank" download="Darshan_Kale_Resume" onClick={handleClick}>Resume</a>
            {/* <a href>Resume</a> */}
          {/* </a> */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu color="white" fontSize="18px">
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>

              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuDivider />
                <MenuItem>Projects</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Education</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Resume</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="white" fontSize="20px">
            <Link to="home">Home</Link>
              <Link to="about">About</Link>
              <Link to="skill">Skills</Link>
              <Link to="projects">Projects</Link>
              <Link to="contact">Contact</Link>
              <a href={cv} id="resume" download="Darshan_Resume" >
            Resume
          </a>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <Box p={4}>
          <TypeWriterPage />
        </Box>
        <AboutME />
        <Skills />
        <Projects />
        <GitCalender/>
        <Contact/>
      </Box>
    </Box>
  );
}
