import { FakeTrip } from "../mocks/fakeTripGenerator";
import { getTripSubtitle } from "../tripsPresenter";

describe("Trips presenter", () => {
  describe("getTripSubtitle", () => {
    test("multiple", () => {
      const trip = new FakeTrip().setCountriesCount(5).setDaysCount(5).build();

      expect(getTripSubtitle(trip)).toBe("5 countries, 5 days");
    });

    test("single", () => {
      const trip = new FakeTrip().setCountriesCount(1).setDaysCount(1).build();

      expect(getTripSubtitle(trip)).toBe("1 country, 1 day");
    });
  });
});
