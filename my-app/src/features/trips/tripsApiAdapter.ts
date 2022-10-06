import { FAKE_API_URI } from "../../global/fakeApi";

export function getTrips() {
  return fetch(`${FAKE_API_URI}/trips`).then((response) => response.json());
}
