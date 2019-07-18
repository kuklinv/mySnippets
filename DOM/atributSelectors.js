// выбор и проверка ссылок с последующим присвоением класса

let linksElements = [...document.querySelectorAll('a')];
linksElements.forEach(function(elem) {
  if (elem.matches('a[href^="http"]') || elem.matches('a[href^="ftp"]'))  {
    elem.classList.add('external');
  }
  if (elem.matches('a[href*="internal"]')) {
    elem.classList.remove('external');
  }
});

// если в конец то селектор[атрибут$='srting']
// если с пробелами то селектор[атрибут~='srting']