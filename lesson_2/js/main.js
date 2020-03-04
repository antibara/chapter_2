//Запись нескольких переменных после единственного объявления
// var firstName = 'jack', lastName = 'sam';
// console.log(firstName, lastName);

// Отличия var и let

//var хойстится let не хойстится

// console.log(firstName); //undefined
// var firstName = 'jack';
// console.log(firstName);
// let firstName = 'jack';ошибка

// объявление 2х let невозмож
// var firstName = 'jack';
// var firstName = 'john';
// console.log(firstName);
// let firstName = 'jack';
// let firstName = 'john';
// console.log(firstName);

// var записываются в глобальный объект window
// var firstName = 'jack';
// console.log(window);

//let не записывается в глобальный объект window
// let firstName = 'jack';
// console.log(window.firstName);

//переменная объявленна через const унаследовала все принципы которые свойственные переменной let,но с небольшими отличиями

//переназначение let возможно
// let firstName = 'jack';
// console.log(firstName);
// firstName = 'john';
// console.log(firstName);

//перезначение const невозможно
// const firstName = 'jack';
// firstName = 'John';
// console.log(firstName);

//объекты 

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ['John', 'Luci']
// }

// //Нестандартные значения ключей
// const notStandartFields = {
//     'kebab-case': 'i can use it :D',
//     '0': 10
// }

// // // Доступ к свойствам объекта
// // console.log(person.age);
// // console.log(notStandartFields['kebab-case']);

// //перезначение свойств даже если это константа
// person.name = 'John';
// console.log(person);

// // Добавление свойства извне
// person.weight = '80kg';
// console.log(person);
// //ссылочный и примитивный вид данных
//удаление поля из объекта
// delete person.name;
// console.log(person);

//массивы

//массив
// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

// //длина массива
// console.log(arrNums.length);

//доступ к первому элементу массива
// console.log(arrNums[0]);

//доступ к последнему элементу массива
// console.log(arrNums[arrNums.length - 1]);

//Переназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);

//оператор инкремент
// let num = 0;
// console.log(num++);

//циклы

//цикл for
// for(let i = 0;i <= 100; i++){
//     console.log('итерация №' + i);
// }

// const arrNums = [1,2,3,4,5];

// for (let i = 0; i < arrNums.length; i++){
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);
// }

// Поиск элемента в массиве циклом с условием
// let value = null;
// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] === 4) value = arrNums[i];
    
// }
// console.log(value);

// Вытаскиваем все элементы больше 3х в отдельный массив
// const arrNums2 = [];

// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

//цикл while
// let i = 0;
// while (i < 10){
//     console.log('итерация №' + i++);
// }

// цикл do while
// let i = 0;

// do{
//     console.log('итерация№' + i++);
    
// }while (i < 10);

// метода массива stage 1

// const someFamily = [
//     {
//         name: 'March',
//         position: 'Mother',
//         age: 36
//     },
//     {
//         name: 'Homer',
//         position: 'Father',
//         age: 40
//     },
//     {
//         name: 'Bart',
//         position: 'son',
//         age: 10
//     },
//     {
//         name: 'Lisa',
//         position: 'Daughter',
//         age: 8
//     }
// ];

// //метод push /pop
// const newChild = {
//     name: 'Maggie',
//     position: 'Daughter',
//     age: 2
// }

// someFamily.push(newChild);
// someFamily.pop();
// console.log(someFamily);

//методы shift/unshift
// someFamily.shift();
// someFamily.unshift(newChild);
// console.log(someFamily);

//метод splice
// someFamily.splice(1, 1);//удаление
// console.log(someFamily);
// someFamily.splice(2, 0, newChild);//добавление
// console.log(someFamily);

//жизнь без метода for each

// const simpsonsFamily = []

// for (let i = 0; i < someFamily.length; i++) {
//     someFamily[i].lastName = 'simpsons';
//     simpsonsFamily.push(someFamily[i]);
// }
// console.log(simpsonsFamily);


//жизнь с методом forEach
// someFamily.forEach(function(item){
// item.latName = 'simpsons';
// simpsonsFamily.push(item);

// })

// console.log(simpsonsFamily);

//жизнь с методом map 
// const simpsonsFamily = someFamily.map(function(item){
//     item.lastName = 'Simpsons';
//     return item;
// });

// console.log(simpsonsFamily);

