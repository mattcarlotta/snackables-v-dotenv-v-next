const head =
  compiled => `# Snackables vs. Dotenv/Dotenv-Expand vs. Next performance

## Commands

Run individual tests by running the following commands:

| \`yarn <command>\` | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| \`dotenv\`         | Runs tests for \`dotenv\` + \`dotenv-expand\` (outputs results to \`results.json\` file as \`dotenv\`). |
| \`next\`           | Runs tests for \`next\` (outputs results to \`results.json\` file as \`next\`).                       |
| \`snack\`          | Runs tests for \`snackables\` (outputs results to \`results.json\` file as \`snackables\`).           |
| \`readme\`         | Generates a \`README.md\` from the \`results.json\` file.                                           |
| \`tests\`          | Runs all tests and generates a \`results.json\` file.                                             |
⚠️ Warning: The tests can take a quite a long time to complete! Adjust the [iterations](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/config/iterationsConfig.js) or [runs](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/config/runsConfig.js) if needed.


## Metrics

**System Specs**:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

**Compiled**: ${compiled}

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const singleLargeEnv = `
Loading and interpolating a single [large env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.interp):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const multiEnvs = `
Loading and interpolating multiple small env files ([1](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env), [2](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development), [3](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.local), [4](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development.local)):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

module.exports = {
  head,
  singleLargeEnv,
  multiEnvs
};
