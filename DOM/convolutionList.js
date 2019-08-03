let mainUl = document.querySelector('ul[class=tree]');


// li - очень широкий и открытый за счет вложенности. не понятно где нажимаешь в его строке и получаешь отклик. завернем в него спаны
let li = mainUl.querySelectorAll('li');
li.forEach(function (li) {
    let span = document.createElement('span');
    li.insertBefore(span, li.firstChild);    // а первый ребенок это текст внутри ли. вставляем в тег <li 'сюда до текста'
    span.appendChild(span.nextSibling);     // а следующий сосед это тот самый текст в ли. мы его записываем внтрь спана. круто!!!
});

mainUl.addEventListener('click', function (e) {
    let target = e.target;
    if (target.tagName != 'SPAN') {
        return;
    }
    let childrenContainer = target.parentNode.querySelectorAll('ul')[0]; // хитрая проверка на то что спан в ли который в UL
    if (!childrenContainer) {                                                     // по сути проверка что найденный спан это и есть  список который нужно скрыть
        return;
    }
    childrenContainer.hidden = !childrenContainer.hidden;               // ну а это вооще супер. никаких toggle тебе и все такое

});

mainUl.addEventListener('mouseover', function (e) {
    let target = e.target;
    if (target.tagName != 'SPAN') {
        return;
    }
    target.style.fontWeight ='bold';
});

mainUl.addEventListener('mouseout', function (e) {
    let target = e.target;
    if (target.tagName != 'SPAN') {
        return;
    }
    target.style.fontWeight = 'normal';
});
