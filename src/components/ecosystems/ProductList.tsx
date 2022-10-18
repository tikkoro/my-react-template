import type { FC } from 'react';
import { getProducts } from 'domains/fakeStoreApi';
import useSWR from 'swr';
import { skimArgs } from 'utils/fn';
import UserList from 'components/organisms/ProductNameList';

const ProductList: FC = () => {
    const { data: products = [] } = useSWR(
        ['productlist', 'members'],
        skimArgs(getProducts)
    );

    return <UserList products={products} />;
};

export default ProductList;
