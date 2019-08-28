const uniq = (arr) => arr.filter((arrItem) => arr.indexOf(arrItem));  // дает массив с уникальным элементом

const findUniq = (arr) => {
        let result = arr.filter((arrItem) => arr.indexOf(arrItem));
        return result[0];
};

findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ]);
findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]);    // not work
