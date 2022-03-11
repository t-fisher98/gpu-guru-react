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
      fontSize={props.fontSize || "xl"}
      color={props.color || "gray.100"}
      _hover={{ textDecoration: "none" }}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} px={"3"}>
        <Box>
          <ListIcon as={props.icon} />
          {children}
        </Box>
        <ListIcon as={BiChevronRight} mx="none" />
      </Flex>
    </Link>
  );
}

export default SideBarLink