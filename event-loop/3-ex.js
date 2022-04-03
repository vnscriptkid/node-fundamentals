console.log(`start main code`);

setTimeout(() => console.log(`timeout`), 0);
setImmediate(() => console.log(`immediate`));

console.log(`end main code. start event loop now`);

// TODO: predict the order
// TODO: why is that order
// TODO: how to make the order deterministic
