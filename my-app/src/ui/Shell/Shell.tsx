import { Box } from "@chakra-ui/react";

import "./Shell.style.scss";

type ShellProps = { children: JSX.Element };

export function Shell({ children }: ShellProps) {
  return (
    <Box bg="gray.50" className="Shell">
      {children}
    </Box>
  );
}
