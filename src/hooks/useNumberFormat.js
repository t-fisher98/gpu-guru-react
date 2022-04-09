function useNumberFormat() {
    let price = null;

    const formatter = (format) => {
        let product = format.replaceAll(".", "");
        product = product.replaceAll("$", "");

        if (isNaN(Number(product))) {
            price = `0.00`;
        } else {
            if (product.length >= 2) {
                const cents = product.substring(
                    product.length - 2,
                    product.length
                );
                const dollars = product.substring(0, product.length - 2);
                price = `${dollars}.${cents}`;
            }
            if (product.length === 1) {
                price = `0.0${product}`;
            }
            if (product.length === 2) {
                price = `0.${product}`;
            }
            if (product.length === 0) {
                price = `0.00`;
            }
        }

        return price;
    };

    return formatter;
}

export { useNumberFormat };
