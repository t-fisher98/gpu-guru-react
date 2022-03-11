import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { BsFacebook, BsFillCpuFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillTwitterCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  FormHelperText,
  Checkbox,
  Button,
  Heading,
  Text,
  HStack,
  VStack,
  Link,
  IconButton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FormStyles } from "ui/forms";
import SemiConductor from "assets/images/semiconductor.jpg";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [emailHasValue, setEmailHasValue] = useState(true);
  const [passwordHasValue, setPasswordHasValue] = useState(true);

  function onSignInRequest(e) {
    e.preventDefault();
    navigate('/dashboard')
  }

  function togglePassword() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  function onInputChange(e) {
    if (e.currentTarget.value.length == 0) {
      if (e.currentTarget.type == "email") {
        setEmailHasValue(true);
      } else {
        setPasswordHasValue(true);
      }
    } else {
      if (e.currentTarget.type == "email") {
        setEmailHasValue(false);
      } else {
        setPasswordHasValue(false);
      }
    }
  }

  return (
    <Center h="100vh" bgColor="gray.200">
      <Flex
        width="80rem"
        height="50rem"
        boxShadow="0 0 10px 5px lightgrey"
        borderRadius="3xl"
      >
        {/* Sign in section */}
        <Center
          width="60%"
          height="100%"
          bgColor="white"
          borderRadius="1rem 0 0 1rem"
          flexDirection="column"
          gap="2rem"
          position="relative"
        >
          <Box
            position="absolute"
            top="1rem"
            left="1rem"
            display="flex"
            alignItems="end"
            gap="0.25rem"
          >
            <Icon as={BsFillCpuFill} fontSize="2.5rem" color="gray.500" />
            <Heading fontSize="2xl" color="gray.500">
              GPU Guru
            </Heading>
          </Box>
          <Heading color="gray.800" fontSize="6xl">
            Welcome Back!
          </Heading>
          <Text color="gray.800" fontSize="1.25rem">
            Sign in to your Dashboard
          </Text>
          <FormStyles method="POST" onSubmit={onSignInRequest}>
            <VStack spacing={4}>
              <FormControl isRequired={emailHasValue}>
                <FormLabel>Email</FormLabel>
                <Input onChange={onInputChange} type="email" required />
              </FormControl>
              <FormControl isRequired={passwordHasValue}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "password" : "text"}
                    onChange={onInputChange}
                    required
                  />
                  <InputRightElement
                    children={
                      showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                    }
                    fontSize="1.5rem"
                    _hover={{ cursor: "pointer" }}
                    onClick={togglePassword}
                  />
                </InputGroup>
                <FormHelperText>
                  <Flex justifyContent="space-between">
                    <Checkbox>Remember Me</Checkbox>
                    <Link>Forgot Password?</Link>
                  </Flex>
                </FormHelperText>
              </FormControl>
              <FormControl>
                <Button
                  type="submit"
                  width="100%"
                  bgColor="gray.800"
                  color="white"
                  _hover={{ bgColor: "blue.300" }}
                >
                  Sign In
                </Button>
              </FormControl>
            </VStack>
          </FormStyles>
          <Center
            width="50%"
            borderBottom="1px solid lightgray"
            paddingBottom="1.5rem"
          >
            <Text>OR</Text>
          </Center>
          <Center>
            <HStack>
              <IconButton
                aria-label="Sign in with Google"
                variant="link"
                icon={<FcGoogle />}
                size="lg"
                fontSize="2.25rem"
              />
              <IconButton
                aria-label="Sign in with Facebook"
                variant="link"
                icon={<BsFacebook />}
                size="lg"
                fontSize="2rem"
                colorScheme="facebook"
              />
              <IconButton
                aria-label="Sign in with Twitter"
                variant="link"
                icon={<AiFillTwitterCircle />}
                size="lg"
                fontSize="2.25rem"
                colorScheme="twitter"
              />
            </HStack>
          </Center>
        </Center>

        {/* Sign up section */}
        <Center
          w="40%"
          borderRadius="0 1rem 1rem 0"
          bgImage={SemiConductor}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          // bgColor="transparent"
        >
          <Box
            bgColor="rgba(0, 0, 0, 0.65)"
            height="100%"
            width="100%"
            borderRadius="0 1rem 1rem 0"
            position="relative"
          >
            <Center gap="3" flexDirection="column" height="100%">
              <Heading fontSize="4xl" fontWeight="bold" color="gray.50">
                Need an Account?
              </Heading>
              <Text color="gray.50">
                Register for an account with us today!
              </Text>
              <Button width="45%" _hover={{ bgColor: "blue.300" }}>
                Sign Up
              </Button>
            </Center>
          </Box>
        </Center>
      </Flex>
    </Center>
  );
}

export default LoginPage;
