const head = `# Snackables v Snackables-Next v. Dotenv/Dotenv-Expand v Next performance

## Commands

Run tests by editing the test file and running the following commands:

| \`yarn <command>\` | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| \`dotenv\`         | Runs tests for \`dotenv\` + \`dotenv-expand\` (\`dotenv.js\` file). |
| \`next\`           | Runs tests for \`next\` (\`next.js\` file).                       |
| \`snack\`          | Runs tests for \`snackables\` (\`snack.js\` file).                |
| \`snacknext\`      | Runs tests for \`snackables-next\` (\`snacknext.js\` file).       |

## Metrics

System Specs:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const singleLargeEnv = `
Loading and interpolating a single [large env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.interp):
| package | date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const multiEnvs = `
Loading and interpolating multiple small env files ([1](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env), [2](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development), [3](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.local), [4](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development.local)):
| package | date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

module.exports = {
  head,
  singleLargeEnv,
  multiEnvs
};
