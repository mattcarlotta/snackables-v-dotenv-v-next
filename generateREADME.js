const fileExists = require("./fileExists");
const readme = require("./readme");
const createFile = require("./createFile");
const { filePath, readResultFile } = require("./resultPath");
const iterations = require("iterationsConfig");

const divider = "|";

const addRowItem = item =>
  `| ${item} `(() => {
    try {
      if (!fileExists(filePath))
        throw String("You must run the test suites first!");
      const results = readResultFile();
      const { snackables } = results;

      const file = readme.head;
      const package = addRowItem("snackables");
      const runDate = addRowItem(snackables.single.date);
      const numberOfIterations = addRowItem(iterations[0]);
      const fastestIterations = addRowItem(
        snackables.single.fastest.map(i => i).join("")
      );
      const avgIteration = addRowItem(snackables.single.avg);
      const fastestPackage = addRowItem("100%").concat(divider);

      file.concat(
        package,
        runDate,
        numberOfIterations,
        fastestIterations,
        avgIteration,
        fastestIterations,
        fastestPackage
      );

      createFile("README2.md", file);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  })();
