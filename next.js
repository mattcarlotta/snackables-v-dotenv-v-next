const { loadEnvConfig } = require("./next-env");

console.time("Test");
for (let i = 0; i < 1000; i += 1) {
  loadEnvConfig();
  console.log("iteration", i + 1);
}
console.timeEnd("Test");

/*
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const { log, error } = console;
// let cachedLoadedEnvFiles = [];

function processEnv(loadedEnvFiles, dir) {
  // if (process.env.__NEXT_PROCESSED_ENV || loadedEnvFiles.length === 0) {
  //   return process.env;
  // }

  process.env.__NEXT_PROCESSED_ENV = "true";

  const origEnv = Object.assign({}, process.env);
  const parsed = {};

  for (const envFile of loadedEnvFiles) {
    try {
      let result = {};
      result.parsed = dotenv.parse(envFile.contents);

      result = dotenvExpand(result);

      // if (result.parsed) {
      //   log(`Loaded env from ${path.join(dir || "", envFile.path)}`);
      // }

      for (const key of Object.keys(result.parsed || {})) {
        if (
          typeof parsed[key] === "undefined" &&
          typeof origEnv[key] === "undefined"
        ) {
          parsed[key] = result.parsed[key];
        }
      }
    } catch (err) {
      error(
        `Failed to load env from ${path.join(dir || "", envFile.path)}`,
        err
      );
    }
  }

  return Object.assign(process.env, parsed);
}

function loadEnvConfig() {
  const dir = process.cwd();
  // const dotenvFiles = [".env", ".env.base"];
  const dotenvFiles = [".env", ".env.base"];
  const loadedEnv = [];

  for (const envFile of dotenvFiles) {
    // only load .env if the user provided has an env config file
    const dotEnvPath = path.join(dir, envFile);

    try {
      const stats = fs.statSync(dotEnvPath);

      // make sure to only attempt to read files
      if (!stats.isFile()) {
        continue;
      }

      const contents = fs.readFileSync(dotEnvPath, "utf8");
      loadedEnv.push({
        path: envFile,
        contents
      });
    } catch (err) {
      if (err.code !== "ENOENT") {
        log(`Failed to load env from ${envFile}`, err);
      }
    }
  }
  combinedEnv = processEnv(loadedEnv, dir);
  return { combinedEnv, loadedEnvFiles: loadedEnv };
}
*/
