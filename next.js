const { loadEnvConfig } = require("./next-src");

console.time("Test");
// loading a default .env
// for (let i = 0; i < 500000; i += 1) {
//   loadEnvConfig(".", [".env"]);
//   console.log("iteration", i + 1);
// }

// loading a large interpolated env loading
// for (let i = 0; i < 5000; i += 1) {
//   loadEnvConfig(".", [".env.interp"]);
//   console.log("iteration", i + 1);
// }

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
for (let i = 0; i < 500000; i += 1) {
  loadEnvConfig();
  console.log("iteration", i + 1);
}

console.timeEnd("Test");
