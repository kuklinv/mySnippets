// li - очень широкий и открытый за счет вложенности. не понятно где нажимаешь в его строке и получаешь отклик. завернем в него спаны
let li = mainUl.querySelectorAll('li');
li.forEach(function (li) {
    let span = document.createElement('span');
    li.insertBefore(span, li.firstChild);    // а первый ребенок это текст внутри ли. вставляем в тег <li 'сюда до текста'
    span.appendChild(span.nextSibling);     // а следующий сосед это тот самый текст в ли. мы его записываем внтрь спана. круто!!!
});