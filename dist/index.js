"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const trainTrip_1 = require("./trainTrip");
const Josh = new client_1.Person('Josh', new trainTrip_1.FirstClass());
Josh.travel();
