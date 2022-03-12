import React from 'react'

import {
  Box,

} from '@chakra-ui/react'

function ProductListings({children, ...props}) {
  return (
    <Box 
      bg="white"
      width={props.width}
      height={props.height}
      borderRadius="0.5rem"
    >
      {children}
    </Box>
  )
}

export default ProductListings