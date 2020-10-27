const fs = require("fs");
const { minify } = require("terser");

const options = {
  compress: {
    warnings: false,
    comparisons: false,
    inline: 2
  },
  mangle: {
    safari10: true
  },
  output: {
    comments: false,
    ascii_only: true
  }
};

(async () => {
  try {
    const { code } = await minify(
      fs.readFileSync("next-src.js", { encoding: "utf-8" }),
      options
    );
    if (code) fs.writeFileSync("next-env.js", code, { encoding: "utf-8" });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
