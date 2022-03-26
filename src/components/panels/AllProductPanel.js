import React from 'react'

import { BasePanel } from 'components/panels'
import { ProductCard } from 'components/products'
import { Flex } from '@chakra-ui/react'

function AllProductPanel() {
  return (
    <BasePanel title="All Products">
      <Flex padding="4rem" wrap="wrap" gap="2rem">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </BasePanel>
  );
}

export default AllProductPanel