import { useQuery } from "@tanstack/react-query";
import { getTrips } from "./tripsApiAdapter";

export function useTripsRepo() {
  const { data: trips, isLoading } = useQuery(["trips"], getTrips);

  return {
    isLoading: () => isLoading,
    get: () => trips?.data || [],
  };
}
