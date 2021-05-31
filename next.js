const { loadEnvConfig } = require("./utils/next-src");
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
    loadEnvConfig(".", [".env"]);
    logIteration(i, "next");
  }
});
tests.single = results;

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[2]; i += 1) {
    loadEnvConfig();
    logIteration(i, "next");
  }
});
tests.multiple = results;

// large interpolated env loading
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[1]; i += 1) {
    loadEnvConfig(".", [".env.interp"]);
    logIteration(i, "next");
  }
});
tests.interpolated = results;

writeResultToFile({ next: tests });
