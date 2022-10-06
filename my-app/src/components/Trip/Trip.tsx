import {
  getEmissionsOffset,
  getImage,
  getName,
  getRating,
  Trip as TripEntity,
} from "../../features/trips/tripsEntity";
import { getTripSubtitle } from "../../features/trips/tripsPresenter";
import { Card } from "../../ui/Card/Card";

export function Trip(trip: TripEntity) {
  return (
    <Card backgroundImage={getImage(trip)}>
      <Card.Content>
        <Card.Title>{getName(trip)}</Card.Title>
        <Card.Subtitle>{getTripSubtitle(trip)}</Card.Subtitle>
        <Card.Snack
          label="Emissions offset"
          value={`${getEmissionsOffset(trip)} t CO₂e`}
        />
      </Card.Content>
      <Card.Rating title="Trip rating" rate={getRating(trip)} />
    </Card>
  );
}
