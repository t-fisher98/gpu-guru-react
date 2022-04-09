import React from "react";

import { ProductDataEntryForm } from "components/products/ProductDataEntryForm";
import { ProductPreview } from "components/products/ProductPreview";
import { Center } from "@chakra-ui/react";

function ProductEditor({
    children,
    productImage,
    productName,
    productPrice,
    productDescription,
    setProductImage,
    handleProductName,
    handleProductPrice,
    handleProductDescription,
    handleSubmit,
}) {
    return (
        <Center
            padding="2rem"
            justifyContent={"center"}
            gap="2rem"
            height="100%"
        >
            <ProductDataEntryForm
                width={"40%"}
                setProductImage={setProductImage}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
            />
            <ProductPreview
                width={"20%"}
                productImage={productImage}
                productName={productName}
                productPrice={productPrice}
                productDescription={productDescription}
            />
        </Center>
    );
}

export default ProductEditor;
