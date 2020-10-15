// from https://medium.com/better-programming/compose-and-pipe-in-javascript-medium-d1e1b2b21f83

const compose = (g, f) => (x) => g(f(x));
// 'x' in compose()
const user = { name: "Gianmarco", password: 1234 };
// function 'f' in compose()
const getUserName = (user) => user.name;
// function 'g' in compose()
const upperCase = (string) => string.toUpperCase();
const getUserNameAndUpperCase = compose(upperCase, getUserName);
getUserNameAndUpperCase(user);
//'GIANMARCO'

const compose = (...functions) => (x) =>
  functions.reduceRight((acc, fn) => fn(acc), x);

const compose = (...functions) => (x) =>
  functions.reduceRight((acc, fn) => fn(acc), x);
const user = { name: "Gianmarco", password: 1234 };
const getUserName = (user) => user.name;
const upperCase = (string) => string.toUpperCase();
const firstFour = (string) => string.substring(0, 4);
compose(firstFour, upperCase, getUserName)(user);
// 'GIAN'
