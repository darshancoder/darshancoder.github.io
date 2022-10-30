import React from "react";
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
} from "@chakra-ui/react";
import {
  RepeatIcon,
  EditIcon,
  AddIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box
      h="400px"
      bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)"
      p="10px"
    >
      <Flex>
        {" "}
        <Flex justifyContent="left">
          <Box ml="30px">
            <Text
              fontFamily="BesterMindRegular"
              as="i"
              textAlign="left"
              color="white"
              ml="5px"
              fontSize="25px"
            >
              Darshan Kale
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
                <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
                <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
                <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Box></Box>
      </Flex>
    
    </Box>
  );
};

export default Navbar;
