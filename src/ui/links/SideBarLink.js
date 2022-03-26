import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Flex,
  Link,
  ListIcon,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function SideBarLink({children, to, ...props}) {
  return (
    <Link
			as={RouterLink}
			to={to}
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