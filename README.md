# Snackables vs. Dotenv/Dotenv-Expand vs. Next performance

## Commands

Run individual tests by running the following commands:

| `yarn <command>` | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `dotenv`         | Runs tests for `dotenv` + `dotenv-expand` (outputs results to `results.json` file as `dotenv`). |
| `next`           | Runs tests for `next` (outputs results to `results.json` file as `next`).                       |
| `snack`          | Runs tests for `snackables` (outputs results to `results.json` file as `snackables`).           |
| `readme`         | Generates a `README.md` from the `results.json` file.                                           |

⚠️ Warning: The tests can take a quite a long time to complete! Adjust the [iterations](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/config/iterationsConfig.js) or [runs](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/config/runsConfig.js) if needed.

## Metrics

**System Specs**:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

**Compiled**: Monday, May 31, 2021 2:53 AM

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Monday, May 31, 2021 1:10 AM | 500000 | 11.811s, 11.858s, 11.914s | 11.861s | 100.00% |
| dotenv | Monday, May 31, 2021 1:16 AM | 500000 | 23.832s, 24.002s, 24.049s | 23.961s | 49.56% |
| next | Monday, May 31, 2021 2:21 AM | 500000 | 87.893s, 88.298s, 89.483s | 88.558s | 13.44% |

Loading and interpolating a single [large env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.interp):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Monday, May 31, 2021 1:11 AM | 5000 | 20.172s, 20.229s, 20.248s | 20.216s | 100.00% |
| dotenv | Monday, May 31, 2021 1:18 AM | 5000 | 70.851s, 70.853s, 70.975s | 70.893s | 28.47% |
| next | Monday, May 31, 2021 2:41 AM | 5000 | 80.66s, 80.669s, 80.748s | 80.692s | 25.01% |

Loading and interpolating multiple small env files ([1](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env), [2](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development), [3](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.local), [4](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development.local)):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Monday, May 31, 2021 1:13 AM | 500000 | 21.848s, 21.865s, 21.87s | 21.861s | 100.00% |
| dotenv | Monday, May 31, 2021 1:25 AM | 500000 | 39.816s, 40.063s, 40.128s | 40.002s | 54.87% |
| next | Monday, May 31, 2021 2:30 AM | 500000 | 108.741s, 108.82s, 110.368s | 109.31s | 20.09% |
