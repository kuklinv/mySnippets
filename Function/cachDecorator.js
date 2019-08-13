function f(x) {
    return  Math.random() * x; // random для удобства тестирования TODO not work
}
function makeCaching(f) {
    // debugger
    let cach = {};
    function wrapper(x) {
        if (!(x in cach)) {
            cach[x] = f.call(this, x);
        }
        return cach[x];
    }
    return wrapper;
}

f = makeCaching(f);

// var a, b;
//
// a = f(1);
// b = f(1);
// console.log(a == b); // true (значение закешировано)
//
// b = f(2);
// console.log(a == b); // false, другой аргумент => другое значение