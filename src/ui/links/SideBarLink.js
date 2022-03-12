import React from 'react'

import {
  Box,
  Flex,
  Link,
  ListIcon,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function SideBarLink({children, ...props}) {
  return (
    <Link
      fontSize={props.fontSize || "md"}
      color={props.color || "gray.100"}
      border={props.border || "none"}
      _hover={{ textDecoration: "none" }}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} p="3">
        <Flex alignItems="center">
          <ListIcon as={props.icon} fontSize="1.5rem"/>
          {children}
        </Flex>
        <ListIcon as={BiChevronRight} mx="none" />
      </Flex>
    </Link>
  );
}

export default SideBarLink