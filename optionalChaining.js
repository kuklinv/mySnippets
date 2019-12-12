

let nestedProp = obj.first?.second;

// Using optional chaining with function calls causes the expression to automatically return
// undefined instead of throwing an exception if the method isn't found:

let result = someInterface.customMethod?.();

// Using optional chaining with function calls
function doSomething(onContent, onError) {
    try {
        // ... do something with the data
    }
    catch (err) {
        onError?.(err.message); // no exception if onError is undefined
    }
}
// The result is therefore undefined.

    let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = myMap.get("bar")?.name;
