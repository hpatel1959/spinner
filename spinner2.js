const symbols = ["| ", "/  ", "-   ", "\\    ", "|   ", "/  ", "- ", "\\", "|"];
const spinner = function () {
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      if (i === symbols.length - 1) {
        process.stdout.write(`\r${symbols[i]}\n`);
      }
      if (i !== symbols.length - 1) {
        process.stdout.write(`\r${symbols[i]}`);
      }
    }, 200 * i);
  }
};

spinner();

// setTimeout(() => {
//   process.stdout.write("\r| ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\    ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 1100);

// setTimeout(() => {
//   process.stdout.write("\r- ");
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|   \n");
// }, 1700);
