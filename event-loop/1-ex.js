const TIMEOUT_MS = 10;

console.log(`start main code`);

setTimeout(() => console.log("timeout"), TIMEOUT_MS);

console.log(`end main code. start event loop now`);
