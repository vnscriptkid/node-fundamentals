const TIMEOUT_MS = 10;

console.log(`start main code`);

setTimeout(() => console.log("timeout 1"), TIMEOUT_MS);
setImmediate(() => console.log(`immediate 1`));

setTimeout(() => {
  setTimeout(() => console.log("timeout 3"), TIMEOUT_MS);
  setImmediate(() => console.log(`immediate 2`));

  console.log("timeout 2");
}, TIMEOUT_MS);

console.log(`end main code. start event loop now`);

// immediate 1
// timeout 1
// timeout 2
// immediate 2
// timeout 3
