const { loadEnvConfig } = require("./next-src");

console.time("Test");
for (let i = 0; i < 500000; i += 1) {
  loadEnvConfig();
  console.log("iteration", i + 1);
}
console.timeEnd("Test");
