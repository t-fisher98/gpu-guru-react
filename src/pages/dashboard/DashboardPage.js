import React, {useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'

import { Flex, Center } from '@chakra-ui/react'
import { SideBar } from 'components/sidebar'
import { AppBar } from 'components/appbar'

function DashboardPage() {
    // Set up a state variable for conditional rendering based on user authentication
    const [isUser, setIsUser] = useState(false);

    // Set up a pointer to the useNavigate() function
    const navigator = useNavigate();

	onAuthStateChanged(auth, (user) => {
        // If the user object is null, set the isUser state variable to false and navigate the user to the login page
        if (!user) {
            setIsUser(false);
            navigator("/");
        }

        // Otherwise, set the isUser state variable to true.
        setIsUser(true);
    });

	// If there is no user signed in, do not render any content
	if (!isUser) {
        return null;
    }

	// If a user is signed in, render the following content
    return (
        <>
            <Flex width="100vw" height="100vh" bg="gray.200">
                <SideBar />
                <AppBar />
                <Center width="calc(100% - 15.5rem)" flexDirection={"column"}>
					<Outlet/>
                </Center>
            </Flex>
        </>
    );
}

export default DashboardPage