import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

type CardGridProps = SimpleGridProps;

export function CardGrid({ children }: CardGridProps) {
  return (
    <SimpleGrid
      className="CardGrid"
      columns={{ sm: 1, md: 2, xl: 3 }}
      spacing="8"
      p="10"
    >
      {children}
    </SimpleGrid>
  );
}
