import React from 'react'

import { Branding } from 'ui/branding';
import { SideBarLink } from 'ui/links';
import {
  Box,
  Flex,
  Center,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import {
  BsFillCpuFill,
  BsFillGrid3X3GapFill,
  BsFillPeopleFill,
  BsPeople,
  BsCardList,
  BsCartFill,
  BsStarHalf,
  BsFillTagsFill,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { MdDashboard } from 'react-icons/md'
import { IoDiamondOutline } from 'react-icons/io5'
import { CgStack } from 'react-icons/cg'

export default function SideBar({children, ...props}) {
  return (
    <Box width="15.5rem" height="100vh" bg="gray.800">
      <Center bg="gray.900" color={"gray.100"} height="4rem" gap="1">
        <Branding icon={BsFillCpuFill} iFs="1.75rem" hFs="1.5rem">
          GPU Guru
        </Branding>
      </Center>
      <List>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={MdDashboard}>DASHBOARD</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsPeople}>VENDORS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillPeopleFill}>USERS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsCardList}>CATEGORIES</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillGrid3X3GapFill}>PRODUCTS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsCartFill}>ORDERS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsStarHalf}>REVIEWS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillTagsFill}>BRANDS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsBoxArrowInRight}>AUTHENTICATION</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={IoDiamondOutline}>ICONS</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={CgStack}>OTHER PAGES</SideBarLink>
        </ListItem>
      </List>
    </Box>
  );
}