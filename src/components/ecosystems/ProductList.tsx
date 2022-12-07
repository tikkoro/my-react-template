import type { FC } from 'react';
import useSWR from 'swr';
import { getProducts } from '@/domains/fakeStoreApi';
import { skimArgs } from '@/utils/fn';
import ProductNameList from '../organisms/ProductNameList';

const ProductList: FC = () => {
    const { data: products = [] } = useSWR(
        ['productlist', 'members'],
        skimArgs(getProducts)
    );

    return <ProductNameList products={products} />;
};

export default ProductList;
