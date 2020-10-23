const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

console.time("Test");
for (let i = 0; i < 1000; i += 1) {
  const myEnv = dotenv.config();
  parsed = dotenvExpand(myEnv).parsed;
  console.log("iteration", i + 1);
}
console.timeEnd("Test");
