import Schema from "miragejs/orm/schema";
import { Server } from "miragejs";
import { Registry } from "miragejs/-types";
import { Models } from "./models";

export type Factories = Models;
export type AppRegistry = Registry<Models, Factories>;
export type AppSchema = Schema<AppRegistry>;
export type MockServer = Server<Registry<Models, Factories>>;
