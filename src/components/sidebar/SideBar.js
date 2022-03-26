import React from 'react'

import { Branding } from 'ui/branding';
import { SideBarLink } from 'ui/links';
import {
  Box,
  Center,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  BsFillCpuFill,
	BsPlusCircleFill,
	BsFillPencilFill,
  BsFillGrid3X3GapFill,
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
          <SideBarLink icon={MdDashboard} to="">
            DASHBOARD
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsPlusCircleFill} to="/dashboard/add">
            ADD PRODUCT
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillPencilFill} to="/dashboard/edit">
            EDIT PRODUCT
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsCardList} to="">
            CATEGORIES
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillGrid3X3GapFill} to="">
            PRODUCTS
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsCartFill} to="">
            ORDERS
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsStarHalf} to="">
            REVIEWS
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsFillTagsFill} to="">
            BRANDS
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={BsBoxArrowInRight} to="">
            AUTHENTICATION
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={IoDiamondOutline} to="">
            ICONS
          </SideBarLink>
        </ListItem>
        <ListItem _hover={{ bgColor: "blue.600" }}>
          <SideBarLink icon={CgStack} to="">
            OTHER PAGES
          </SideBarLink>
        </ListItem>
      </List>
    </Box>
  );
}