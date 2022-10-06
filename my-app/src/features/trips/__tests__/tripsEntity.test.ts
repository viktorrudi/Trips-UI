import { FakeTrip } from "../mocks/fakeTripGenerator";
import {
  getId,
  getName,
  getImage,
  getCountriesCount,
  getDaysCount,
  getRating,
  getEmissionsOffset,
  hasMultipleCountries,
  Trip,
  hasMultipleDays,
} from "../tripsEntity";

describe("Trips Entity", () => {
  test("Accessors", () => {
    const trip = new FakeTrip()
      .setId("fake-id")
      .setName("Fake Name")
      .setImage("fake-url")
      .setCountriesCount(5)
      .setEmissionsOffset(2.3)
      .setDaysCount(5)
      .setRating(5)
      .build();

    expect(getId(trip)).toBe("fake-id");
    expect(getName(trip)).toBe("Fake Name");
    expect(getImage(trip)).toBe("fake-url");
    expect(getCountriesCount(trip)).toBe(5);
    expect(getDaysCount(trip)).toBe(5);
    expect(getRating(trip)).toBe(5);
    expect(getEmissionsOffset(trip)).toBe(2.3);
  });

  test("hasMultipleCountries", () => {
    expect(
      hasMultipleCountries(new FakeTrip().setCountriesCount(2).build())
    ).toBe(true);
    expect(
      hasMultipleCountries(new FakeTrip().setCountriesCount(1).build())
    ).toBe(false);
    expect(
      hasMultipleCountries(new FakeTrip().setCountriesCount(0).build())
    ).toBe(false);
  });

  test("hasMultipleDays", () => {
    expect(hasMultipleDays(new FakeTrip().setDaysCount(2).build())).toBe(true);
    expect(hasMultipleDays(new FakeTrip().setDaysCount(1).build())).toBe(false);
    expect(hasMultipleDays(new FakeTrip().setDaysCount(0).build())).toBe(false);
  });
});
