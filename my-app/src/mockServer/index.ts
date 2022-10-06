import { createServer } from "miragejs";
import { AppSchema } from "./mockServerTypes";
import { models } from "./models";
import { TRIPS_SEED } from "./seeds";

const log = (...args: string[]) => console.log("[MOCK API] |", ...args);

export const startMockServer = () => {
  log("Starting Dev Mock Server");

  return createServer({
    logging: true,
    models,

    seeds(server) {
      log("Seeding...");
      server.db.loadData(TRIPS_SEED);
    },

    routes() {
      this.urlPrefix = "https://fake-rest-api.com";

      this.get("/trips", (schema: AppSchema, _request) => ({
        data: schema.all("trip").models,
      }));
    },
  });
};
