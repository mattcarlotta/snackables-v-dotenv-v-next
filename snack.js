const snackables = require("snackables");

console.time("Test");

// loading default ".env" like dotenv
for (let i = 0; i < 500000; i += 1) {
  snackables.config();
  console.log("iteration", i + 1);
}

// loading interpolated ".env" like dotenv+dotenv-expand
// for (let i = 0; i < 5000; i += 1) {
//   snackables.config({ paths: [".env.interp"] });
//   console.log("iteration", i + 1);
// }

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
// for (let i = 0; i < 500000; i += 1) {
//   snackables.config({
//     paths: [".env", ".env.development", ".env.local", ".env.development.local"]
//   });
//   console.log("iteration", i + 1);
// }

console.timeEnd("Test");
