const snackables = require("snackables");
const executeTest = require("./utils/executeTest");
const writeResultToFile = require("./utils/writeResultToFile");
const iterations = require("./config/iterationsConfig");

const tests = {
  single: {},
  interpolated: {},
  multiple: {}
};

let results = executeTest(logIteration => {
  for (let i = 0; i < iterations[0]; i += 1) {
    snackables.config();
    logIteration(i);
  }
});
tests.single = results;

results = executeTest(logIteration => {
  for (let i = 0; i < iterations[1]; i += 1) {
    snackables.config({ paths: [".env.interp"] });
    logIteration(i);
  }
});
tests.interpolated = results;

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
    logIteration(i);
  }
});
tests.multiple = results;

writeResultToFile({ snackables: tests });
