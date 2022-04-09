import React, { useState } from "react";
import { useNumberFormat } from "hooks/useNumberFormat";

import { useAddNewProduct } from "hooks/useAddNewProduct";
import BasePanel from "./BasePanel";
import { ProductEditor } from "components/products/ProductEditor";
import { EditorFeedback } from "components/products/EditorFeedback";
import ProductPreview from "assets/images/placeholder-image.png";

const defaults={
	description: 'Product Description',
	name: 'Product Name',
	price: 0
}

function AddProductPanel() {
    const [isWriting, setIsWriting] = useState(false);
    const [productImage, setProductImage] = useState({
        previewImage: ProductPreview,
        file: null,
    });
    const [productName, setProductName] = useState(defaults.name);
    const [productPrice, setProductPrice] = useState(defaults.price);
    const [productDescription, setProductDescription] = useState(defaults.description);
    const [loading, productLoader] = useAddNewProduct();
    const formatter = useNumberFormat();

    function handleProductName(name) {
        setProductName(name);
    }

    function handleProductPrice(price) {
        setProductPrice(formatter(price));
    }

    function handleProductDescription(description) {
        setProductDescription(description);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const productData = {
            productName,
            productPrice,
            productDescription,
        };

        setIsWriting(true);
        productLoader(productData, productImage.file);
		setProductImage({previewImage:ProductPreview, file:null});
		setProductName(defaults.name);
		setProductPrice(defaults.price);
		setProductDescription(defaults.description);
    }

    return isWriting ? (
        <EditorFeedback status={loading} writeCompleted={setIsWriting} />
    ) : (
        <BasePanel title="Add Product">
            <ProductEditor
                productImage={productImage}
                productName={productName}
                productPrice={productPrice}
                productDescription={productDescription}
                setProductImage={setProductImage}
                handleProductName={handleProductName}
                handleProductPrice={handleProductPrice}
                handleProductDescription={handleProductDescription}
                handleSubmit={handleSubmit}
            />
        </BasePanel>
    );
}

export default AddProductPanel;
