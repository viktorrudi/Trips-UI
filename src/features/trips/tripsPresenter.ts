import {
  getCountriesCount,
  getDaysCount,
  hasMultipleCountries,
  hasMultipleDays,
  Trip,
} from "./tripsEntity";

export function getTripSubtitle(trip: Trip) {
  const countries = hasMultipleCountries(trip)
    ? `${getCountriesCount(trip)} countries`
    : "1 country";
  const days = hasMultipleDays(trip) ? `${getDaysCount(trip)} days` : "1 day";
  return `${countries}, ${days}`;
}
