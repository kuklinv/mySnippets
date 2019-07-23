let data = {
    "Trees": {
        "Coniferous": {
            "Larch": {},
            "Spruce": {}
        },
        "Flowers": {
            "Birch tree": {},
            "Topol": {}
        }
    }
};

const createTreeDom = (data) => {
    if (isEmpty(data)) return;
    let  ul = document.createElement('ul');
    for (let key in data) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let ulChildren = createTreeDom(data[key]);
        if (ulChildren) {
            li.appendChild(ulChildren);
        }
        ul.appendChild(li);
    }
    return ul;
};

let  targetHTML = document.querySelector('div[class="task2"]');

const createTree = (targetHTML, data) => {
    targetHTML.appendChild(createTreeDom(data));
};

createTree(targetHTML, data);

function isEmpty(obj) {
    for (let key in obj) {
        console.log(false);
    }
    return console.log(true);
}