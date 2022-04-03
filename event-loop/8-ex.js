setImmediate(() => {
  setImmediate(() => {
    console.log(`step 1`);
  });

  setImmediate(() => {
    console.log(`step 2`);

    setImmediate(() => console.log(`step 3`));
    setImmediate(() => console.log(`step 4`));
  });
  console.log("XXX");
});

console.log(`step 0`);

setTimeout(() => {
  console.log(`timeout`);

  setImmediate(() => console.log(`YYY`));
}, 0);

console.log(`step 0.5`);

// step 0
// step 0.5
// timeout
// XXX
// YYY
// step 1
// step 2
// step 3
// step 4

// OR

// step 0
// step 0.5
// XXX
// timeout
// step 1
// step 2
// YYY
// step 3
// step 4
