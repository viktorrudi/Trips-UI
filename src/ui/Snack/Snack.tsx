import { Box, Text, TextProps } from "@chakra-ui/react";

import "./Snack.style.scss";

type SnackProps = {
  children: JSX.Element[];
  className?: string;
};
function Snack({ className, ...props }: SnackProps) {
  return (
    <Box
      rounded="lg"
      bg="gray.900"
      className={`${className} Snack`}
      {...props}
    />
  );
}

function TextContent(props: TextProps) {
  return <Text className="Snack__Text" color="white" {...props} />;
}

type HeadProps = { children: JSX.Element };
function Head({ children }: HeadProps) {
  return <Box className="Snack__Head">{children}</Box>;
}

type TailProps = { children: JSX.Element };
function Tail({ children }: TailProps) {
  return <Box className="Snack__Tail">{children}</Box>;
}

Snack.Text = TextContent;
Snack.Head = Head;
Snack.Tail = Tail;

export { Snack };
