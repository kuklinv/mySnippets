function f(a, b) {
    console.log(a + b); // произвольная функция или метод
}
work = spy(f);
function spy(f) {
    f.calls = [];
    function wrapper(...arg) {
        f.calls.push(arg);
        return f.apply(this, arguments);
    }
    return wrapper;
}
work(1, 2); // 3
work(4, 5); // 9
for (let args of f.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}