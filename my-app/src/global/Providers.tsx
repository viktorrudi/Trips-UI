import { ChakraProvider } from "@chakra-ui/react";

type ProviderProps = { children: JSX.Element };

export function Providers({ children }: ProviderProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
