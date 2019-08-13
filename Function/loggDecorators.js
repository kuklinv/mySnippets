function work(a, b) {
    alert(a + b); // work - произвольная функция
}

function makeLogging(f, log) {
    function wrapper(...args) {
        log.push([...args]);
        return f.apply(this, args);
    }
    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
}

// function f(a) {
//     console.log(a);
// }
//
// let logArr = [];
// work = makeLogging(f, logArr);
// work(1);
// work(2);
// work(3);
// console.log(logArr);
// for (let i = 0; i < logArr.length; i += 1) {
//     // console.log(`arg${i} = ${logArr[i]}`);
//     console.log('arg'+ i + '=' + logArr[i]);
// }
//
// function makeLogging(f, logArr) {
//     return function (a) {
//         // logArr.push(arguments[0]);
//         logArr.push(a);
//         return f.call(this, a);
//     }
// }