import React from "react";

import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { Card } from "components/card";

function ProductPreview({
    children,
    width,
    productImage,
    productName,
    productPrice,
    productDescription,
}) {
    return (
        <Center width={width}>
            <Card>
                <Box borderBottom="1px solid lightgrey" padding="1rem">
                    <Flex justifyContent="end">
                        <Text fontSize="2rem" color="grey">
                            ${productPrice}
                        </Text>
                    </Flex>
                    <Image
                        src={productImage.previewImage}
                        bg="lightgrey"
                        borderRadius="0 0 0 1.5rem"
                    />
                </Box>
                <Flex flexDirection="column" padding="1rem">
                    <Text fontSize="1.5rem">{productName}</Text>
                    <Text lineHeight='1.25'>{productDescription}</Text>
                </Flex>
            </Card>
        </Center>
    );
}

export default ProductPreview;
