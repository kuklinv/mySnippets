function search(doc, tagName){
    var elem = doc;
    var response = [];
    arrCheck(Array.from(doc.children))
    return response;
    function arrCheck(arr) {
        arr.forEach(el => {
            if (el.tagName == tagName.toUpperCase()) {
                response.push(el)
            }
            arrCheck(Array.from(el.children))
        })
    }
}

 /// или

const search = (doc, tag) => {
    const coll = [...doc.children];
    const initAcc = coll.filter(e => e.tagName.toLowerCase() === tag);
    return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
};

