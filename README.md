# Snackables v Snackables-Next v. Dotenv/Dotenv-Expand v Next performance

## Commands

Run tests by editing the test file and running the following commands:

| `yarn <command>` | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `dotenv`         | Runs tests for `dotenv` + `dotenv-expand` (`dotenv.js` file). |
| `next`           | Runs tests for `next` (`next.js` file).                       |
| `snack`          | Runs tests for `snackables` (`snack.js` file).                |
| `snacknext`      | Runs tests for `snackables-next` (`snacknext.js` file).       |

## Metrics

System Specs:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

Last run: 05/29/2021

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | type | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | default | 500,000 | 11.19s, 11.27s, 11.28s | 11.24s | 100% |
| denv+denv-exp | default | 500,000 | 19.92s, 20.17s, 20.37s | 20.15s | 55.78% |
| next | .env only | 500,000 | 84.19s, 84.49s, 84.68s | 84.45s | 13.30% |

Loading and interpolating a single [large env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.interp):
| package | type | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | .env.interp only | 5,000 | 19.99s, 20.14s, 20.17s | 20.10s | 100% |
| denv+denv-exp | .env.interp only | 5,000 | 60.86s, 61.11s, 61.18s | 61.05s | 32.92% |
| next | .env.interp only | 5,000 | 72.90s, 73.31s, 74.13s | 73.45s | 27.37% |

Loading and interpolating multiple small env files ([1](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env), [2](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development), [3](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.local), [4](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development.local)):
| package | type | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | .env, .env.development, .env.local, .env.development.local | 500,000 | 20.90s, 20.91s, 20.93s | 20.91s | 100% |
| denv+denv-exp | .env, .env.development, .env.local, .env.development.local | 500,000 | 33.86s, 34.04s, 34.14s | 34.01s | 61.48% |
| next | default (for development) | 500,000 | 100.69s, 101.67s, 101.91s | 101.42s | 20.62% |
