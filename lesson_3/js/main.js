// function declaration
//      name       arguments
// function square(a,b) {
//     console.log(a * b);    
// //    console.log(a - b);
// //    console.log(a + b);
// }

// square(2,2);
// // square(5,8);
// // square(543,678);

// function checkArg () {
//     console.log(arguments);
    
// }
// checkArg('john', 20)
// function square (a,b) {
//     return a * b;
//     console.log('does not work');
    
// }

// const firstResult = square (2,2);
// const secondResult = square (5,5);

// console.log(firstResult, secondResult);

//example 1
// function lineShortener(str, chars = 5) {
//     let arr = [];
//     for (let i = 0; i < chars; i++) arr.push(str[i]);
//     return arr.join('') + '...';
// }

// const longStr = 'its very long string';
// const shortStr = lineShortener(longStr);
// const secondShortStr = lineShortener('hello its me');

// console.log(shortStr, secondShortStr);

//example 2
// function isEmptyArray(value) {
//     return Array.isArray(value) && value.length === 0;
// }

// console.log(isEmptyArray({ name: 'jack' }));
// console.log(isEmptyArray([15]));

//function expression анонимная функция
// const multiple = function(a,b) {
//     console.log(a * 2, b * 2);
// }

// multiple(3,6);

//методы

// const person = {
//     name: 'jack',
//     birthYear : 1980,
//     getAge: function(){
//         console.log(this);
//         return 2020 - this.birthYear
//     },
//     sayHello: function() {
//         console.log(this.name + ' said Hello');
//     },
//     changeName: function(newName) {
//         if (typeof newName !=='string'){
//             console.error('To change the name,enter the line');
//             return;
//         }
//         this.name = newName
//     }
// }

// const ageOfPerson = person.getAge();

// console.log(ageOfPerson);
// person.sayHello();
// person.changeName('Jim');
// console.log(person.name);

//область видимости


// function scope () {
//     let firstName = 'jack';
//     console.log(firstName);
// }
// scole();

// const firstNameScope2 = scope2();
// console.log(firstNameScope2);
/*ааа
аа
*/

