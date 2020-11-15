const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

// default env loading
console.time("Test");
for (let i = 0; i < 500000; i += 1) {
  const myEnv = dotenv.config();
  dotenvExpand(myEnv);
  console.log("iteration", i + 1);
}
console.timeEnd("Test");

// large interpolated env loading
// console.time("Test");
// for (let i = 0; i < 5000; i += 1) {
//   const myEnv = dotenv.config({ path: ".env.interp" });
//   dotenvExpand(myEnv);
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
// console.time("Test");
// for (let i = 0; i < 500000; i += 1) {
//   dotenvExpand(dotenv.config({ path: ".env" }));
//   dotenvExpand(dotenv.config({ path: ".env.development" }));
//   dotenvExpand(dotenv.config({ path: ".env.local" }));
//   dotenvExpand(dotenv.config({ path: ".env.development.local" }));
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");
