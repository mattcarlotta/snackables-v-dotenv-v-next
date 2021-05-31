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

Compiled: Sunday, May 30, 2021 11:06 PM

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Sunday, May 30, 2021 9:49 PM | 500000 | 11.039s, 11.124s, 11.189s | 11.117s | 100.00% |
| dotenv | Sunday, May 30, 2021 10:01 PM | 500000 | 20.447s, 20.596s, 20.651s | 20.565s | 53.99% |

Loading and interpolating a single [large env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.interp):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Sunday, May 30, 2021 9:50 PM | 5000 | 20.726s, 20.746s, 20.799s | 20.757s | 100.00% |
| dotenv | Sunday, May 30, 2021 10:03 PM | 5000 | 66.892s, 66.935s, 67.02s | 66.949s | 30.98% |

Loading and interpolating multiple small env files ([1](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env), [2](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development), [3](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.local), [4](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env.development.local)):
| package | test date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Sunday, May 30, 2021 9:52 PM | 500000 | 20.493s, 20.755s, 20.771s | 20.673s | 100.00% |
| dotenv | Sunday, May 30, 2021 10:10 PM | 500000 | 34.73s, 34.759s, 34.767s | 34.752s | 59.01% |
