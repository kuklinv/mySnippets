//It’s easy to define map(), filter(), forEach() and lots of other interesting things using reduce:
const map = (fn, arr) =>
  arr.reduce((acc, item, index, arr) => {
    return acc.concat(fn(item, index, arr));
  }, []);

const filter = (fn, arr) =>
  arr.reduce((newArr, item) => {
    return fn(item) ? newArr.concat([item]) : newArr;
  }, []);
// and more in functional style at:
// https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d

//Array.prototype.reduceRight()
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
