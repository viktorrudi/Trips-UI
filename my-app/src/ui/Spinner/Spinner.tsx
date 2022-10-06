import { Spinner as ChakraSpinner } from "@chakra-ui/react";

type SpinnerProps = { className?: string };

export function Spinner({ className = "" }: SpinnerProps) {
  return (
    <ChakraSpinner
      className={`Spinner ${className}`}
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
}
