import React from "react";
import TypeWriterPage from "./TypeWriterPage";
import {
  Box,
  Spacer,
  MenuList,
  Text,
  MenuItem,
  MenuButton,
  IconButton,
  Menu,
  Flex,
  Grid,GridItem
  
} from "@chakra-ui/react";
import {Link} from "react-scroll"
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineMenu, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { RiSlideshowFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import AboutME from "./AboutME";
import Skills from "./Skills";
import {Links} from "./Links";

const Navbar = () => {

  return (
    <>
    <Box
      h="auto"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
      p="10px"
    >
      <Flex>
        {" "}
        <Flex justifyContent="left">
          <Box ml="100px">
            <Text
              fontFamily="BesterMindRegular"
              as="i"
              textAlign="left"
              color="white"
              ml="5px"
              fontSize="25px"
            >
              Darshan <span style={{ color: "red" }}>Kale</span>
            </Text>
          </Box>
        </Flex>
        <Spacer />
        <Flex>
         <Box mr="30px">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<AiOutlineMenu />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<HiOutlineHome />}>Home</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>About</MenuItem>
                <MenuItem icon={<AiOutlineFundProjectionScreen />}>
                  Projects
                </MenuItem>
                <MenuItem icon={<RiSlideshowFill />}>Skills</MenuItem>
                <MenuItem icon={<SlBookOpen />}>Education</MenuItem>
                <MenuItem icon={<IoIosContact />}>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box> 
          
        </Flex>
      </Flex>
      <Box>
        <TypeWriterPage />
      </Box>

    </Box>
    <AboutME/>
    <Skills/>

   </>
  );
};

export default Navbar;
