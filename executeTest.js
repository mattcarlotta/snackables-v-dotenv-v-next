const dayjs = require("dayjs");

const runs = 6;

const executeTest = fn => {
  const iterations = [];
  const date = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  for (let i = 1; i <= runs; i += 1) {
    const startDate = dayjs();
    fn(num => console.log(`iteration \x1b[33m${num + 1}\x1b[0m`));
    iterations.push(dayjs().diff(startDate, "s", true));
  }
  const runtimes = iterations;
  const fastest = Array.from(iterations).sort().splice(0, 3);
  const avg = parseFloat((fastest.reduce((a, b) => a + b, 0) / 3).toFixed(3));

  return {
    date,
    runtimes,
    fastest,
    avg
  };
};

module.exports = executeTest;
