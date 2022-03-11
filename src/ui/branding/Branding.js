import React from 'react'

import { Icon, Heading } from '@chakra-ui/react'

function Branding({children, icon, iFs, hFs}) {
  return (
    <>
      <Icon as={icon} fontSize={iFs}></Icon>
      <Heading fontSize={hFs}>{children}</Heading>
    </>
  )
}

export default Branding