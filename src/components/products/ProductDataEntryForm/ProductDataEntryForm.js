import React from "react";

import {
    Center,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { FormStyles } from "ui/forms";
import { ProductImageDropBox } from "components/products/ProductImageDropBox";

function ProductDataEntryForm({
    children,
    width,
    setProductImage,
    handleProductName,
    handleProductPrice,
    handleProductDescription,
    handleSubmit,
}) {
    return (
        <Center width={width}>
            <FormStyles onSubmit={handleSubmit} height="fit-content">
                <FormControl marginBottom="1rem">
                    <ProductImageDropBox
                        
                        setProductImage={setProductImage}
                    />
                </FormControl>
                <FormControl marginBottom="1rem">
                    <FormLabel>Product Name</FormLabel>
                    <Input
                        
                        onChange={(e) =>
                            handleProductName(e.target.value.trim())
                        }
                        maxLength={30}
                    />
                </FormControl>
                <FormControl marginBottom="1rem">
                    <FormLabel>Product Price</FormLabel>
                    <Input
                        
                        onChange={(e) => handleProductPrice(e.target.value)}
                        maxLength={7}
                    />
                </FormControl>
                <FormControl marginBottom="1rem">
                    <FormLabel>Product Description</FormLabel>
                    <Textarea
                        
                        resize="none"
                        rows="3"
                        onChange={(e) =>
                            handleProductDescription(e.target.value)
                        }
                        maxLength={90}
                    />
                </FormControl>
                <FormControl>
                    <Button type='submit' width="100%" colorScheme="blue">
                        Add Product
                    </Button>
                </FormControl>
            </FormStyles>
        </Center>
    );
}

export default ProductDataEntryForm;
