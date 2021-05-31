const { readFileSync } = require("fs");
const { createDateWithFormat } = require("./createDate");
const fileExists = require("./fileExists");
const createFile = require("./createFile");
const { filePath, readResultFile } = require("./resultPath");
const objectHasProperty = require("./objectHasProperty");
const iterations = require("../config/iterationsConfig");
const readme = require("../readme");
const { rejects } = require("assert");

const packages = ["snackables", "dotenv", "next"];
const runs = ["single", "interpolated", "multiple"];
const divider = "|";

const addRowItem = item => `| ${item} `;

(async () => {
  try {
    if (!fileExists(filePath))
      throw String("You must run the test suites first!");
    const results = readResultFile();

    let file = readme.head(createDateWithFormat());

    const addResultsToTable = async (pkg, cfg, idx) => {
      await new Promise((res, rej) => {
        try {
          if (!objectHasProperty(results, pkg))
            rej(
              `Unable to locate a '${pkg}' property within the results.json file!`
            );

          const result = results[pkg];

          if (!objectHasProperty(result, cfg))
            rej(`Unable to locate a '${cfg}' property within the results!`);
          const config = result[cfg];

          const package = addRowItem(pkg);
          const runDate = addRowItem(config.date);
          const numberOfIterations = addRowItem(iterations[idx]);
          const fastestIterations = addRowItem(
            config.fastest.map(i => `${i}s`).join(", ")
          );
          const avgIteration = addRowItem(`${config.avg}s`);
          const fastestPackage = addRowItem("100%")
            .concat(divider)
            .concat("\n");

          file = file.concat(
            package,
            runDate,
            numberOfIterations,
            fastestIterations,
            avgIteration,
            fastestPackage
          );
          res();
        } catch (error) {
          rej(error);
        }
      });
    };

    await addResultsToTable(packages[0], runs[0], 0);
    await addResultsToTable(packages[1], runs[0], 0);
    //  await addResultsToTable(packages[2], runs[0], 0);

    createFile("README2.md", file);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
