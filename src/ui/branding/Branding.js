import React from 'react'

import { Icon, Heading, Flex } from '@chakra-ui/react'

function Branding({children, icon, iFs, hFs}) {
  return (
    <>
      <Flex alignItems="center">
        <Icon as={icon} fontSize={iFs}></Icon>
        <Heading fontSize={hFs}>{children}</Heading>
      </Flex>
    </>
  );
}

export default Branding