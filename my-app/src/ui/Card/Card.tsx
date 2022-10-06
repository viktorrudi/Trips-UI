import {
  Box,
  BoxProps,
  Heading,
  HeadingProps,
  TextProps,
  Text,
} from "@chakra-ui/react";
import { Snack } from "../Snack/Snack";

type CardProps = BoxProps & {
  backgroundImage: string;
  children: JSX.Element;
};

function Card({ className = "", backgroundImage, ...props }: CardProps) {
  return (
    <Box
      backgroundImage={backgroundImage}
      className="Card"
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      {...props}
    />
  );
}

function Title(props: HeadingProps) {
  return <Heading {...props} />;
}

function Subtitle(props: TextProps) {
  return <Text {...props} />;
}

type AttentionBlockProps = {
  label: string;
  value: string;
};
function Attention({ label, value }: AttentionBlockProps) {
  return (
    <Snack className="AttentionBlock">
      <Snack.Head>
        <Snack.Text>{label}</Snack.Text>
      </Snack.Head>
      <Snack.Tail>
        <Snack.Text>{value}</Snack.Text>
      </Snack.Tail>
    </Snack>
  );
}

Card.Title = Title;
Card.Subtitle = Subtitle;
Card.AttentionBlock = Attention;

export { Card };
