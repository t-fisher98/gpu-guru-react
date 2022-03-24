import React from 'react'
import { Flex, Center, Box, Heading } from '@chakra-ui/react'
import { SideBar } from 'components/sidebar'
import { AppBar } from 'components/appbar'
import { ProductListings } from 'components/panels'

function DashboardPage() {

  return (
    <>
      <Flex width="100vw" height="100vh" bg="gray.200">
        <SideBar />
        <AppBar />
        <Center width="calc(100% - 15.5rem)" flexDirection={"column"}>
          <ProductListings width="90%" height="75%">
            <Box p="1rem" borderBottom="1px solid lightgray">
              <Heading color="gray.600" fontSize="3xl">
                Product Listings
              </Heading>
            </Box>
          </ProductListings>
        </Center>
      </Flex>
    </>
  );
}

export default DashboardPage