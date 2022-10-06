import { createServer } from "miragejs";
import { FAKE_API_URI } from "../global/api";
import { AppSchema } from "./mockServerTypes";
import { models } from "./models";
import { TRIPS_SEED } from "./seeds";

const log = (...args: string[]) => console.log("[MOCK API] |", ...args);

export const startMockServer = () => {
  log("Starting Dev Mock Server");

  return createServer({
    logging: true,
    timing: 3000,
    models,

    seeds(server) {
      log("Seeding...");
      server.db.loadData({ trips: TRIPS_SEED });
    },

    routes() {
      this.urlPrefix = FAKE_API_URI;

      this.get("/trips", (schema: AppSchema, _request) => ({
        data: schema.all("trip").models,
      }));
    },
  });
};
