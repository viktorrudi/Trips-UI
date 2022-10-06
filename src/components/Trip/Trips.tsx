import { getId } from "../../features/trips/tripsEntity";
import { CardGrid } from "../../ui/CardGrid/CardGrid";
import { Trip } from "./Trip";
import { Trip as TripEntity } from "../../features/trips/tripsEntity";

type TripsProps = {
  trips: TripEntity[];
};
export function Trips({ trips }: TripsProps) {
  return (
    <CardGrid>
      {trips.map((trip) => (
        <Trip key={getId(trip)} {...trip} />
      ))}
    </CardGrid>
  );
}
