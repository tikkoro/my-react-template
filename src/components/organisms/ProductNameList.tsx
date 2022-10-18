import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Product } from 'domains/fakeStoreApi';

type Props = { products: Product[] };

const ProductNameList: FC<Props> = ({ products = [] }) => (
    <Box>
        {products.map((product) => (
            <Text key={product.id}>{product.title}</Text>
        ))}
    </Box>
);

export default ProductNameList;
