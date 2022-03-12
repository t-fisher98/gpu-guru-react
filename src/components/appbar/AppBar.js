import React, { useState } from 'react'

import { 
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  HStack,
  IconButton,
  Image
} from '@chakra-ui/react'
import {
  BsSearch,
  BsEnvelope,
  BsEnvelopeOpen,
  BsBell,
  BsBellFill,
} from "react-icons/bs";
import { IoEllipsisVertical } from 'react-icons/io5'

function AppBar(props) {

  const [mailHover, setMailHover] = useState(false);

  const mailHoverState = () => setMailHover(!mailHover);

  return (
    <Flex
      position="fixed"
      px="2rem"
      width="calc(100% - 15.5rem)"
      height="4rem"
      bg="white"
      right="0"
      alignItems="center"
      justifyContent="space-between"
      boxShadow=" 0 5px 5px lightgray"
    >
      <InputGroup>
        <Input
          type="search"
          placeholder="Search"
          width="20rem"
          borderRadius="1rem"
          border="none"
          bg="gray.100"
          color="gray.800"
          _focus={{ bg: "gray.200" }}
        ></Input>
        <InputLeftElement
          children={<BsSearch color="gray" />}
          pointerEvents="none"
        />
      </InputGroup>
      <HStack>
        <IconButton
          icon={mailHover ? <BsEnvelopeOpen /> : <BsEnvelope />}
          variant="ghost"
          isRound
          size="md"
          fontSize="1.5rem"
          _hover={{ cursor: "pointer", bgColor: "gray.100" }}
          _focus={{ outline: "none" }}
          onMouseEnter={mailHoverState}
          onMouseLeave={mailHoverState}
        />
        <IconButton
          icon={<BsBell />}
          variant="ghost"
          isRound
          size="md"
          fontSize="1.5rem"
          _hover={{ cursor: "pointer", bgColor: "gray.100" }}
          _focus={{ outline: "none" }}
        />
        <Image 
          src="https://avatars.dicebear.com/api/initials/TF.svg?b=%232d3250&r=50&backgroundColorLevel=900"
          boxSize="1.75rem"
          _hover={{cursor: "pointer"}}
        />
        <IconButton
          icon={<IoEllipsisVertical />}
          variant="ghost"
          isRound
          size="md"
          fontSize="1.5rem"
          _hover={{
            cursor: "pointer",
            bgColor: "gray.100",
            transform: "rotate(-90deg)",
          }}
          _focus={{ outline: "none" }}
        >
          TF
        </IconButton>
      </HStack>
    </Flex>
  );
}

export default AppBar