import React from "react";

import { useGetProducts } from 'hooks/useGetProducts'
import { BasePanel } from "components/panels";
import { Flex } from "@chakra-ui/react";
import { ProductCard } from "components/products/ProductCard";

function AllProductPanel() {

	const productData = useGetProducts()

	return (
        <BasePanel title="All Products" overflow="scroll" ofx="hidden">
            <Flex padding="4rem" justify="center" wrap="wrap" gap="2rem">
				{
					productData && productData.length >= 3 ? productData.map(product => <ProductCard key={product.uid} product={product} />) : null
				}
			</Flex>
        </BasePanel>
    );
}

export default AllProductPanel;
