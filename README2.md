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

Compiled: Sunday, May 30, 2021 10:42 PM

Loading and interpolating a single [small env file](https://github.com/mattcarlotta/snackables-v-dotenv-v-next/blob/master/.env):
| package | date | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| snackables | Sunday, May 30, 2021 9:49 PM | 500000 | 11.039s, 11.124s, 11.189s | 11.117s | 100% |
| dotenv | Sunday, May 30, 2021 10:01 PM | 500000 | 20.447s, 20.596s, 20.651s | 20.565s | 100% |
