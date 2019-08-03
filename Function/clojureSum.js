let sum = function (x)  {
    return function (y) {
        return x + y;
    };
};
export default sum;

// sum(1)(2) = 3
// sum(5)(-1) = 4