import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { SideBar } from 'components/sidebar'
import { AppBar } from 'components/appbar'

function DashboardPage() {

  return (
    <Flex width="100vw" height="100vh" bg="gray.200">
      <SideBar />
      <AppBar />
    </Flex>
  );
}

export default DashboardPage