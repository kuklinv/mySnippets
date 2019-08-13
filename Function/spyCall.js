function f(a, b) {
    console.log( a + b ); // произвольная функция или метод
}
work = spy(f);
function spy (f) {
    function wrapper (...arg) {
        wrapper.calls.push(arg);
        return  f.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}