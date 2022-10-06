import { Box, Heading, HeadingProps, TextProps, Text } from "@chakra-ui/react";
import { Rating, RatingProps } from "../Rating/Rating";
import { Snack } from "../Snack/Snack";

import "./Card.style.scss";

type CardProps = {
  backgroundImage: string;
  children: JSX.Element[];
};

function Card({ backgroundImage, ...props }: CardProps) {
  return (
    <Box
      className="Card"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="xs"
      p="6"
      {...props}
    />
  );
}

type ContentProps = { children: JSX.Element[] };
function CardContent(props: ContentProps) {
  return <Box className="Card__Content" {...props} />;
}

function CardTitle(props: HeadingProps) {
  return (
    <Heading
      size="md"
      textAlign="center"
      color="white"
      className="Card__Title"
      {...props}
    />
  );
}

function CardSubtitle(props: TextProps) {
  return (
    <Text
      fontSize="xs"
      textAlign="center"
      color="white"
      className="Card__Subtitle"
      {...props}
    />
  );
}

type CardSnackProps = {
  label: string;
  value: string;
};
function CardSnack({ label, value }: CardSnackProps) {
  return (
    <Snack className="Card__Snack">
      <Snack.Head>
        <Snack.Text fontSize="sm">{label}</Snack.Text>
      </Snack.Head>
      <Snack.Tail>
        <Snack.Text fontSize="sm">{value}</Snack.Text>
      </Snack.Tail>
    </Snack>
  );
}

type CardRatingProps = RatingProps & {
  title: string;
  rate: RatingProps["initialValue"];
};
function CardRating({ title, rate }: CardRatingProps) {
  return (
    <Box className="Card__Rating" bg="white">
      <Text fontSize="xs" className="Rating__Title">
        {title}
      </Text>
      <Box className="Rating__Stars">
        <Rating size={30} initialValue={rate} />
      </Box>
      <Text fontWeight="bold" className="Rating__Rate">
        {rate}
      </Text>
    </Box>
  );
}

Card.Content = CardContent;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Snack = CardSnack;
Card.Rating = CardRating;

export { Card };
