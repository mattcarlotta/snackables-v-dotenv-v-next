const snackables = require("snackables");

// loading default ".env" like dotenv
console.time("Test");
for (let i = 0; i < 500000; i += 1) {
  snackables.config();
  console.log("iteration", i + 1);
}
console.timeEnd("Test");

// loading interpolated ".env" like dotenv+dotenv-expand
// console.time("Test");
// for (let i = 0; i < 5000; i += 1) {
//   snackables.config({ path: [".env.interp"] });
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");

// loading default next env files (.env, .env.development, .env.local, .env.development.local)
// console.time("Test");
// for (let i = 0; i < 500000; i += 1) {
//   snackables.config({
//     path: [".env", ".env.development", ".env.local", ".env.development.local"]
//   });
//   console.log("iteration", i + 1);
// }
// console.timeEnd("Test");
