const snackables = require("snackables");
const executeTest = require("./executeTest");
const writeResultToFile = require("./writeResultToFile");

// const runs = 6;
const tests = {
  default: {},
  interpolated: {},
  multiple: {}
};

let results = executeTest(logIteration => {
  for (let i = 0; i < 500000; i += 1) {
    snackables.config();
    logIteration(i);
  }
});
tests.default = results;

writeResultToFile(tests);

// console.log("🚀 ~ file: snack.js ~ line 10 ~ tests", tests);
// results = executeTest(logIteration => {
//   for (let i = 0; i < 5000; i += 1) {
//     snackables.config({ paths: [".env.interp"] });
//     logIteration(i);
//   }
// });
// tests.interpolated = results;

// results = executeTest(logIteration => {
//   for (let i = 0; i < 500000; i += 1) {
//     snackables.config({
//       paths: [
//         ".env",
//         ".env.development",
//         ".env.local",
//         ".env.development.local"
//       ]
//     });
//     logIteration(i);
//   }
// });
// tests.multiple = results;
