const TIMEOUT_MS = 10;

console.log(`start main code`);

setImmediate(() => {
  console.log(`immediate 1`);
  process.nextTick(() => {
    console.log(`nextTick 2`);
  });
});

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(`promise 2`);
  });

  setTimeout(() => console.log("timeout 3"), TIMEOUT_MS);
  setImmediate(() => console.log(`immediate 2`));

  process.nextTick(() => {
    console.log(`nextTick 3`);
  });

  console.log(`timeout 1`);
}, TIMEOUT_MS);

Promise.resolve().then(() => {
  console.log(`promise 1`);
});

process.nextTick(() => {
  console.log(`nextTick 1`);
});

console.log(`end main code. start event loop now`);

// start main code
// end main code. start event loop now
// nextTick 1
// promise 1
// immediate 1
// nextTick 2
// timeout 1
// nextTick 3
// promise 2
// immediate 2
// timeout 3
