const snackables = require("snackables");

console.time("Test");
for (let i = 0; i < 500000; i += 1) {
  snackables.config({
    path: [".env", ".env.development", ".env.local", ".env.development.local"]
  });
  console.log("iteration", i + 1);
}
console.timeEnd("Test");
