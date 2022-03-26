import React from 'react'

import Card from 'components/card/Card'
import { 
	Box,
	Text,
	Image,
	Flex,
	Center
} from '@chakra-ui/react'

function ProductCard(props) {
	return (
		<Card>
			<Box borderBottom="1px solid lightgrey" padding="1rem">
				<Flex justifyContent="end">
					<Text
						fontSize="2rem"
						color="grey"	
					>
						{props.price || "Price"}
					</Text>
				</Flex>
				<Image 
					src="./images/placeholder-image.png" 
					bg="lightgrey" 
					borderRadius="0 0 0 1.5rem"
				/>
			</Box>
			<Flex flexDirection="column" padding="1rem" gap="1.5rem">
				<Text fontSize="1.5rem">
					Product Name
				</Text>
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum aut maiores illo laborum sed commodi!
				</Text>
			</Flex>
		</Card>
	)
}

export default ProductCard