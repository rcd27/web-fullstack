// FIXME: проставить тип варарга в аргументе функции
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Spread
// Создание нового массива с добавлением элементов
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 5, 6];
console.log(arr2)

// Добавление свойств объекта
let obj1 = {name: 'Здарова', surname: 'Заебал'};
let obj2 = {
    ...obj1,
    city: 'Норыжск',
    sayShit: function (shit) {
        console.log(shit)
    }
};
obj2.sayShit('Пацаны, не бейте, лучше обоссыте');

