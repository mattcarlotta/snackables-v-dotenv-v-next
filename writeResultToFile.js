const fs = require("fs");
const { join } = require("path");

const fileExists = file => {
  try {
    return fs.statSync(file).isFile();
  } catch (e) {
    return false;
  }
};

const writeResultToFile = result => {
  try {
    const filePath = join(process.cwd(), "result.json");

    let file = {};
    if (fileExists(filePath)) {
      const readFile = fs.readFileSync(filePath, { encoding: "utf-8" });
      file = JSON.parse(readFile);
    }

    const combinedFile = Object.assign(file, result);

    fs.writeFileSync(filePath, JSON.stringify(combinedFile, null, 2), {
      encoding: "utf-8"
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = writeResultToFile;
