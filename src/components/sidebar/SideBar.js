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
import { BsFillCpuFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdDashboard } from 'react-icons/md'

export default function SideBar({children, ...props}) {
  return (
    <Box width="15.5rem" height="100vh" bg="gray.800">
      <Center bg="gray.900" color={"gray.100"} height="4rem" gap="1">
        <Branding icon={BsFillCpuFill} iFs="1.75rem" hFs="1.5rem">
          GPU Guru
        </Branding>
      </Center>
      <List mt="3">
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillGrid3X3GapFill}>Products</SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={MdDashboard}>Dashboard</SideBarLink>
        </ListItem>
      </List>
    </Box>
  );
}