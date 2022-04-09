import React from 'react'

import Card from 'components/card/Card'
import { 
	Box,
	Text,
	Image,
	Flex,
	IconButton
} from '@chakra-ui/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

function ProductCard({product}) {

	const {productName, productPrice, imageUrl, productDescription} = {...product};

	return (
        <Card height='32.5rem'>
            <Box borderBottom="1px solid lightgrey" padding="1rem">
                <Flex justifyContent="space-between">
                    <Flex gap="0.5rem">
                        <IconButton
                            variant="ghost"
                            colorScheme="blackAlpha"
							isRound
                            icon={<BsFillPencilFill />}
                        />
                        <IconButton
                            variant="ghost"
                            colorScheme="blackAlpha"
							isRound
                            icon={<AiFillDelete />}
                        />
                    </Flex>
                    <Text fontSize="2rem" color="grey">
                        ${productPrice}
                    </Text>
                </Flex>
                <Image
                    src={imageUrl}
                    bg="lightgrey"
                    borderRadius="0 0 0 1.5rem"
                />
            </Box>
            <Flex flexDirection="column" padding="1rem">
                <Text fontSize="1.5rem">{productName}</Text>
                <Text lineHeight='1.25'>{productDescription}</Text>
            </Flex>
        </Card>
    );
}

export default ProductCard