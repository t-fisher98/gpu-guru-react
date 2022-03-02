import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
  Text,
  Icon,
  HStack,
  Link
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'

function LoginPage() {
  return (
    <Center h="100vh" bgColor="#f5f5f5">
      <Flex width="70vw" maxW="80rem" minW="40rem" height="60vh" boxShadow="0 0 10px 5px lightgrey" borderRadius="1rem">
        <Center
          width="60%"
          height="100%"
          bgColor="white"
          borderRadius="1rem 0 0 1rem"
          flexDirection="column"
          gap="2rem"
        >
          <FormControl maxW="80%" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email"></Input>
            <FormHelperText>Please enter your email</FormHelperText>
          </FormControl>
          <FormControl maxW="80%" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password"></Input>
            <FormHelperText>Please enter your password</FormHelperText>
          </FormControl>
          <Center width="80%">
            <FormControl width="100%">
              <Button variant="outline">
                <Link as={RouterLink} to="/dashboard" type="submit" variant="outline" display="block" width="100%">
                  Sign In
                </Link>
              </Button>

            </FormControl>
          </Center>
          <Center>
            <Text>Or</Text>
          </Center>
          <Center>
            <HStack>
              <Icon as={MdFacebook}/>
              <Icon as={}/>
              <Icon as={}/>
            </HStack>
          </Center>
        </Center>
        <Center
          width="40%"
          height="100%"
          bgColor="#252b36"
          gap="1.5rem"
          borderRadius="0 1rem 1rem 0"
          flexDirection="column"
        >
          <Heading color="lightgrey" fontSize="3vw">
            Welcome Back!
          </Heading>
          <Text color="lightgrey" fontSize="1.25rem">
            Sign in to your Dashboard
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}



export default LoginPage