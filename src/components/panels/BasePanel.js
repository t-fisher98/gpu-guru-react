import React, { Children } from 'react'

import {
  Box,
  Heading,
	Flex
} from '@chakra-ui/react'

function BasePanel({children, title, ...props}) {
  return (
		<>
			<Box 
				p="1rem"
				borderBottom="1px solid lightgray"
				width="90%"
				bg="white"
				borderRadius="0.5rem 0.5rem 0 0"
			>
				<Heading color="gray.600" fontSize="3xl" textAlign="center">
					{title}
				</Heading>
			</Box>
			<Box bg="white" width="90%" height="75%" borderRadius="0 0 0.5rem 0.5rem" overflow="scroll" overflowX="hidden">
				{children}
			</Box>
		</>
  );
}

export default BasePanel;