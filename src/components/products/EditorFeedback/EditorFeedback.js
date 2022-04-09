import React from "react";
import { useNavigate } from 'react-router-dom'

import { Button, Center, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";

function EditorFeedback({ children, status, writeCompleted, ...props }) {
	const navigator = useNavigate();

    return (
        <Center flexDirection="column" gap="1rem">
            {!status ? (
                <>
                    <AiOutlineCheckCircle color="#38A169" size="12rem" />
                    <Text>Product Uploaded Successfully</Text>
                </>
            ) : (
                <>
                    <AiOutlineCloudUpload color="yellow" size="12rem" />
                    <Text>Uploading Product</Text>
                </>
            )}
            <Button
                colorScheme="blue"
                onClick={() => writeCompleted(false)}
                disabled={status}
            >
                Add Another Product
            </Button>
            <Button 
				colorScheme="blackAlpha"
				onClick={() => navigator('/dashboard')}
			>
				View All Products
			</Button>
        </Center>
    );
}

export default EditorFeedback;
