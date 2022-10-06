import { Model } from "miragejs";
import { ModelDefinition } from "miragejs/-types";

import { Trip } from "../features/trips/tripsEntity";

export const models: {
  trip: ModelDefinition<Trip>;
} = {
  trip: Model.extend({}),
};

export type Models = {
  trip: typeof models.trip;
};
