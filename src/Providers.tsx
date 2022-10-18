import type { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';

const swrOptions = {
    suspense: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
};

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <HelmetProvider>
        <ChakraProvider>
            <Router>
                <SWRConfig value={swrOptions}>{children}</SWRConfig>
            </Router>
        </ChakraProvider>
    </HelmetProvider>
);

export default Providers;
