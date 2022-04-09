import { useState, useEffect } from 'react'

import { db } from 'libs/firebase'
import { ref, get } from 'firebase/database'

function useGetProducts(){
	const [productData, setProductData] = useState(null);

	useEffect(
		() => {
			async function getProducts(){
				const productRef = ref(db, 'products')
				const productDataSnapshot = await get(productRef);
				setProductData(Object.values(productDataSnapshot.val()))
			}
			getProducts();
		}, []
	
	)
	
	return productData;
}

export { useGetProducts }