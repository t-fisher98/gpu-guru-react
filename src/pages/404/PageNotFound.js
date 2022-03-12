import React from 'react'

import { Center, Heading, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsFillCpuFill } from "react-icons/bs";
import { Branding } from 'ui/branding'

function PageNotFound() {
  return (
    <Center height="100vh" p="1rem" bg="gray.50" flexDirection="column" gap="3">
      <Branding icon={BsFillCpuFill} iFs="3rem" />
      <Heading fontSize="8xl" color="gray.800">
        OOPS!
      </Heading>
      <Text
        fontSize="1.25rem"
        width="15rem"
        textAlign="center"
        color="gray.800"
      >
        We can't seem to find what you are looking for!
      </Text>
      <Text color="red.600" fontWeight="bold">Error Code: 404</Text>
      <Link to="/">
        <Button colorScheme="blue">Back to Safety</Button>
      </Link>
    </Center>
  );
}

export default PageNotFound