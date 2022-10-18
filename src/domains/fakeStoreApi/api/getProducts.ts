import ky, { Options as KyOptions } from 'ky';
import { DEFAULT_KY_OPTIONS } from '../constants';
import { isProducts, Product } from '../types/product';

export const getProducts = async (
    tmp: string,
    options?: KyOptions
): Promise<Product[]> => {
    const mergedOptions = {
        ...DEFAULT_KY_OPTIONS,
        ...options,
    };
    const response = await ky.get(`products`, mergedOptions);
    const products: unknown[] = await response.json();

    if (!isProducts(products)) {
        throw Error('API type error');
    }

    return products;
};
