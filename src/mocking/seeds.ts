import { FakeTrip } from "../features/trips/mocks/fakeTripGenerator";

export const TRIPS_SEED = [
  new FakeTrip()
    .setId("1")
    .setName("Diving adventure in Egypt")
    .setImage("https://picsum.photos/id/53/300")
    .setEmissionsOffset(3.5)
    .setRating(4)
    .setCountriesCount(1)
    .setDaysCount(4)
    .build(),
  new FakeTrip()
    .setId("2")
    .setName("Swimming with dolphins")
    .setImage("https://picsum.photos/id/329/300")
    .setEmissionsOffset(2.35)
    .setRating(2.5)
    .setCountriesCount(2)
    .setDaysCount(5)
    .build(),
  new FakeTrip()
    .setId("3")
    .setName("Trip to the moon")
    .setImage("https://picsum.photos/id/102/300")
    .setEmissionsOffset(5000)
    .setRating(1)
    .setCountriesCount(1)
    .setDaysCount(25)
    .build(),
];
