import {
  Rating as SimpleRating,
  RatingProps as SimpleRatingProps,
} from "react-simple-star-rating";

import "./Rating.style.scss";

export type RatingProps = SimpleRatingProps;
export function Rating(props: RatingProps) {
  return <SimpleRating className="Rating" {...props} />;
}
