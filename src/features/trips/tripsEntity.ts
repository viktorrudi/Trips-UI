export type Trip = {
  id: string;
  image: string;
  emissions_offset: number;
  name: string;
  rating: number;
  count_of: {
    countries: number;
    days: number;
  };
};

/**
 * Accessors
 */

export const getId = (trip: Trip) => trip.id;
export const getCountriesCount = (trip: Trip) => trip.count_of.countries;
export const getDaysCount = (trip: Trip) => trip.count_of.days;
export const getImage = (trip: Trip) => trip.image;
export const getEmissionsOffset = (trip: Trip) => trip.emissions_offset;
export const getName = (trip: Trip) => trip.name;
export const getRating = (trip: Trip) => trip.rating;

/**
 * Predicates
 */

export function hasMultipleCountries(trip: Trip) {
  return trip.count_of.countries > 1;
}

export function hasMultipleDays(trip: Trip) {
  return trip.count_of.days > 1;
}
