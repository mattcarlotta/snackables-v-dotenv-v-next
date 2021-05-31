const snackables = require("snackables");
const executeTest = require("./executeTest");
const writeResultToFile = require("./writeResultToFile");
const iterations = require("./iterationConfig");

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
tests.default = results;

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
