import React, { useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

import {
    Flex,
    InputGroup,
    Input,
    InputLeftElement,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Avatar,
} from "@chakra-ui/react";
import { BsSearch, BsEnvelope, BsEnvelopeOpen, BsBell } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

function AppBar(props) {
    const [mailHover, setMailHover] = useState(false);

    const mailHoverState = () => setMailHover(!mailHover);

	function onLogoutRequest(e){
		signOut(auth);
	}

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
                <Menu>
                    <MenuButton
                        as={Avatar}
                        size={"sm"}
                        _hover={{ cursor: "pointer" }}
                    />
                    <MenuList mt="1rem">
                        <MenuItem>My Account</MenuItem>
                        <MenuDivider></MenuDivider>
                        <MenuItem onClick={onLogoutRequest}>Log Out</MenuItem>
                    </MenuList>
                </Menu>
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
                />
            </HStack>
        </Flex>
    );
}

export default AppBar;
