const someObject = {
  prop1: "hello",
  prop2: "world",
  prop3: 00123,
};

Object.prototype[Symbol.iterator] = function*() {
  const keys = Object.keys(this);
  for (const key of keys) {
    yield this[key];
  }
};

for (someProperty in someObject) {
  console.log(someProperty);
}
