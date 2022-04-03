const fs = require("fs");

console.log(`start main code`);

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log(`timeout 1`);
    setTimeout(() => console.log(`timeout 2`), 0);
    setImmediate(() => console.log(`immediate 2`));
  }, 0);
  setImmediate(() => console.log(`immediate 1`));
});

console.log(`end main code. start event loop now`);
