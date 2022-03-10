import React, { useState } from 'react'
import { 
  Flex,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import {
  BsFillGrid3X3GapFill
} from 'react-icons/bs'

function DashboardPage() {
  
  const [ isOpen, setIsOpen ] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <Flex width="100vw" height="100vh" bg="gray.100">
        <Box
          width={isOpen ? "15rem" : "2rem"}
          height="100vh"
          bg="gray.800"
        >
          <List>
            <ListItem>
              <Link
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                color="white"
              >
                <ListIcon as={BsFillGrid3X3GapFill}></ListIcon>
                Products
              </Link>
            </ListItem>
          </List>
        </Box>
        {/* <Button onClick={toggleSidebar}>Slide</Button> */}
        <Flex>

        </Flex>
      </Flex>
    </>
  );
}

export default DashboardPage