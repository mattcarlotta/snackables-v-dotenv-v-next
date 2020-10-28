const { loadEnvConfig } = require("./next-src");

// loading a default .env
console.time("Test");
for (let i = 0; i < 500000; i += 1) {
  loadEnvConfig(".", [".env"]);
  console.log("iteration", i + 1);
}
console.timeEnd("Test");

// loading a large interpolated env loading
// console.time("Test");
// for (let i = 0; i < 5000; i += 1) {
//   loadEnvConfig(".", [".env.interp"]);
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
// console.time("Test");
// for (let i = 0; i < 500000; i += 1) {
//   loadEnvConfig();
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");
