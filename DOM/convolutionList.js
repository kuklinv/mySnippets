let mainUl = document.querySelector('ul[class="tree"]');

// lets bold
mainUl.addEventListener('mouseover', function (e) {
    let target = e.target;
    target.style.fontWeight = 'bold';
});

mainUl.addEventListener('mouseout', function (e) {
    let target = e.target;
    target.style.fontWeight = 'normal';
});

//lets "LI" - SPAN
let treeLis = mainUl.querySelectorAll('li');

for (let i = 0; i < treeLis.length; i++) {
    let li = treeLis[i];

    let span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);
}
// its Listener
mainUl.onclick = function(event) {
    let target = event.target;

    if (target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
    if (!childrenContainer) return; // no children

    // wow its toggle
    childrenContainer.hidden = !childrenContainer.hidden;
};
