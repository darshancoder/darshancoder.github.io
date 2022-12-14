import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
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

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import AboutME from "./AboutME";
import Skills from "./Skills";
import TypeWriterPage from "./TypeWriterPage";
import { Projects } from "./Projects";
import GitCalender from "./GitCalender";
import Contact from "./Contact";

const Links = ["Home", "About", "Projects", "Skills", "Education", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}  
    href={"#"}
  >
    {children}
  </Link>
);

export default function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)" h="1200px">
      <Box
        bg={"black"}
        px={4}
        position="fixed"
        width="full"
      >
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
            // justifyContent={"space-between"}
          >
            <Box>
              {" "}
              <Flex >
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
              spacing={4}
              color="white"
              fontSize="20px"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink textAlign="end" key={link}>
                  {link}
                </NavLink>
              ))}
              {/* <NavLink> */}
              {/* <Link
                href="#"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                }}
              >
                About
              </Link>
              <Link
                href="#about"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                }}
              >
                About
              </Link>
              <Link
                href="#about"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                }}
              >
                About
              </Link>
              <Link
                href="#about"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                }}
              >
                About
              </Link> */}

              {/* </NavLink> */}
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
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="white" fontSize="20px">
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
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
       <Projects/>
         {/*<GitCalender/>
        <Contact/> */}
      </Box>
    </Box>
  );
}
