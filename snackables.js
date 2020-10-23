const snackables = require("snackables");

console.time("Test");
for (let i = 0; i < 1000; i += 1) {
  snackables.config({ path: ".env,.env.base" });
  console.log("iteration", i + 1);
}
console.timeEnd("Test");
