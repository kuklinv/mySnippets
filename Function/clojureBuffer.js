// классический строковый буфер через замыкание
function makeBuffer() {
    let buffer = '';
    return function (arg) {
        if (arg) {
            arg.toString();
            return buffer += arg;
        } else return buffer;
    }
}
let buffer = makeBuffer();

export default buffer;