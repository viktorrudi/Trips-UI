import { Box, Container } from "@chakra-ui/react";

import "./Shell.style.scss";

type ShellProps = { children: JSX.Element };

export function Shell({ children }: ShellProps) {
  return (
    <Box bg="gray.50" className="Shell">
      <Container maxW="1200px" className="Shell__Layout">
        {children}
      </Container>
    </Box>
  );
}
