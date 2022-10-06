import { useTripsRepo } from "../../features/trips/tripsRepo";
import { Spinner } from "../../ui/Spinner/Spinner";
import { Trips } from "./Trips";

export function TripContainer() {
  const tripsRepo = useTripsRepo();

  return tripsRepo.isLoading() ? (
    <Spinner />
  ) : (
    <Trips trips={tripsRepo.get()} />
  );
}
