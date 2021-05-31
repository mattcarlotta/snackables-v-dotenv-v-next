const snackables = require("snackables");
const executeTest = require("./utils/executeTest");
const writeResultToFile = require("./utils/writeResultToFile");
const iterations = require("./config/iterationsConfig");

const tests = {
  single: {},
  interpolated: {},
  multiple: {}
};

// loading a default .env
let results = executeTest(logIteration => {
  for (let i = 0; i < iterations[0]; i += 1) {
    snackables.config();
    logIteration(i, "snackables");
  }
});
tests.single = results;

// large interpolated env loading
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[1]; i += 1) {
    snackables.config({ paths: [".env.interp"] });
    logIteration(i, "snackables");
  }
});
tests.interpolated = results;

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[2]; i += 1) {
    snackables.config({
      paths: [
        ".env",
        ".env.development",
        ".env.local",
        ".env.development.local"
      ]
    });
    logIteration(i, "snackables");
  }
});
tests.multiple = results;

writeResultToFile({ snackables: tests });
