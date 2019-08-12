function makeArmy() {
    let shooters = [];

    let i = 0;
    for ( let i = 0 ; i < 10; i += 1) {  /// ранее стоял while поэтому переменная все время была = 10 - итоговому
        let shooter = function() {       // значению. весь массив функций смотрел на нее, все 10
            alert( i );
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

export default army;