import { FC, useState } from 'react';
import {
    Box,
    Button,
    Heading,
    Text,
    Image,
    Code,
    Stack,
    Link,
    Center,
    keyframes,
    usePrefersReducedMotion,
} from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import './App.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const App: FC = () => {
    const [count, setCount] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 20s linear`;

    return (
        <>
            <Center>
                <Stack direction="row">
                    <Link href="https://vitejs.dev" isExternal rel="noreferrer">
                        <Image
                            boxSize="100px"
                            src="/vite.svg"
                            alt="Vite logo"
                        />
                    </Link>
                    <Link
                        href="https://reactjs.org"
                        isExternal
                        rel="noreferrer"
                    >
                        <Image
                            animation={animation}
                            boxSize="100px"
                            src={reactLogo}
                            alt="React logo"
                        />
                    </Link>
                </Stack>
            </Center>
            <Heading>{title}</Heading>
            <Box p="2">
                <Button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <Text>
                    Edit <Code>src/App.tsx</Code> and save to test HMR
                </Text>
            </Box>
            <Text color="#888">
                Click on the Vite and React logos to learn more
            </Text>
        </>
    );
};

export default App;
