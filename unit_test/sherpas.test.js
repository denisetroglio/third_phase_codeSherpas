const server = require("../src/main.js");
const supertest = require("supertest");

const api = supertest(server);

