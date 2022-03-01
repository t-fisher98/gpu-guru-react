import React, { useState } from 'react'
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";

function LoginPage() {
  return (
    <Center h="100vh" bgColor="white">
      <Flex width="70vw" maxW="80rem" minW="40rem" height="60vh">
        <Center width="60%" height="100%" bgColor="lightgrey" borderRadius="1rem 0 0 1rem" flexDirection="column" gap="2rem">
          <FormControl maxW="80%" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="janedoe@gmail.com"></Input>
            <FormHelperText>Please enter your email</FormHelperText>
          </FormControl>
          <FormControl maxW="80%" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password"></Input>
            <FormHelperText>Please enter your password</FormHelperText>
          </FormControl>
          <Center width="80%">
            <FormControl width="100%">
              <Button type="submit" variant="outline" width="100%">Sign In</Button>
            </FormControl>
          </Center>
        </Center>
        <Center width="40%" height="100%" bgColor="darkblue" gap="1.5rem" borderRadius="0 1rem 1rem 0" flexDirection="column">
          <Heading color="lightgrey" fontSize="2.5rem">Welcome Back!</Heading>
          <Text color="lightgrey" fontSize="1.25rem">Sign in to your Dashboard</Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default LoginPage