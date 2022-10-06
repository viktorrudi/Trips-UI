import { FAKE_API_URI } from "../../global/fakeApi";
import { TripsHttpResponse } from "./tripsPorts";

export function getTrips(): Promise<TripsHttpResponse> {
  try {
    return fetch(`${FAKE_API_URI}/trips`).then((response) => response.json());
  } catch (e) {
    console.error(new Error("Failed to fetch trips", { cause: e }));
    return Promise.reject(e);
  }
}
