import React from 'react'

import { Icon, Heading, Flex } from '@chakra-ui/react'

function Branding({children, icon, iFs, hFs, gap}) {
  return (
    <>
      <Flex alignItems="center" gap={gap}>
        <Icon as={icon} fontSize={iFs}></Icon>
        <Heading fontSize={hFs}>{children}</Heading>
      </Flex>
    </>
  );
}

export default Branding