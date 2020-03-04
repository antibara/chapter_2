// var age = +prompt ('Ваш возраст');
// if (age <= 13) {
//     alert ('Аватар');
// }else if (age <= 17) {
//     alert ('Джуманджи');
// }else if (age >= 18 && age <=80) {
//     alert ('Виноваты звезды');
// } else {
//     alert ('Bay-bay')
// }

// var str = prompt ('Какой напиток вы любите?') 
// switch (str){
//     case 'beer': alert ('Это вредно')
//     break;
//     case 'vodka': alert ('Это вредно')
//     break;
//     case 'coffee': alert ('Это вредно')
//     break;
//     case 'nasha': alert ('Это кайфово')
//     break;
//     case 'mohito': alert ('Это вредно')
//     break;
//     case 'mlk': alert ('Это полезно')
//     break;
//     default: alert ('Базар жок')
// }

// (2<3) && (3>4) || true
// (true) && (false) || true
// false || true
// true

// !true && (!true || 100 != 5*5)
// false && (false || true)
// false && (true)
// false

// ("123" == 123) || ((10<= 10)&&('' ===false))
// (true) || ((true) && (false))
// (true) || (false)
// true 

// let klan = ['targaryen', 'stark', 'lanister', 'baratheon', 'greyjoy']
// console.log(klan[2]);
// console.log(klan[0], klan[klan.length-1]);
// var lastKlan = klan.pop ();
// console.log(lastKlan);
// var firstKlan = klan.shift();
// console.log(firstKlan);

// for (let i = 2;i <= 100; i++){
//     if(i % 2 == 0)
//     console.log(i)
// }

// let fizzbuzz = []
// for (let i = 1; i <= 100; i++){
//   fizzbuzz.push(i);
//     if (i % 3 == 0 && i % 5 == 0)
//     console.log('fizzbuzz' + i);
//     else if (i % 3 == 0)
//     console.log('fizz' + i);
//     else if (i % 5 == 0)
//     console.log('buzz' + i);
//     else {
//         console.log(i);
//     }
// }

    
// let student= {
//     name:'David',
//     class:'9',
//     age: 12
// }
//  console.log(student.name);
 
// let r = +prompt ('введите радиус');
// let n = 3.1415;
// let s = r * n **2;
// let p = (2 * n) * r;
//  alert (`${s}  \n  ${p}`)

// let word = prompt ('Введите слово')
// const arr = []

// for (let x = 0; x <= word.length; x++){
//  for (let y = x+1; y <= word.length; y++){
//         arr.push(word.slice(x,y))
//  }
// }
// console.log(arr);

// let arr = []
// for (let i = 1; i <= 100; i++){
//     arr.push(i)
//     if (i % 3 == 0)
//     console.log(i);
//     else if (i % 5 == 0)
//     console.log(i);
//     else if (i % 7 == 0)
//     console.log(i);
//     // else {
//     //     console.log();
        
//     }
    
    
    
//     const arrNums = [1,0,2,0,4,5,6,7,0,0,0];

// //      for (let i = 0; i < arrNums.length; i++) {
// //         if(arrNums[i] = 0) arrNums.push[i];
// //      }
// // console.log(arrNums);
// var removed = arrNums.splice (1, 1)
// var removed = arrNums.splice (2, 1)
// var removed = arrNums.splice (6, 3)
// arrNums.push (removed[6,7])
// console.log(arrNums)

 

// console.log(arrNums);

// var arr = [0, 1, 2, 3, 4, 5];
// console.log(arr);
// var removed = arr.splice(3, 1);
// arr.unshift(removed[0]);
// console.log(arr);

//  let arr = [1,0,3,0,5,6,7,8,0,0,0]
// let arr2 = arr.filter(number => number != 0)
// let arr3 = arr.filter(number => number === 0)
// console.log(arr2 + ',' + arr3);
// let arr2 = arr.filter(function(number) {
//     return number != 0
// })







// console.log(arr2);
// console.log(arr);


// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

// let longWords = words.filter(word => word.length > 6);
// console.log(longWords);
// console.log(words);


// let arr = [
//     ['a','b','c'],
//     ['d','e','f'],
//     ['g','h','i']
// ];
// let arr2 =[]
// for (let x = 0; x = arr.length; x++){
//    for (let y = 0; y = arr[x].length; y++) {
//     console.log(arr[i],[j]);
    
//    }
//    }
// let arr = [
//     ['a','b','c'],
//     ['d','e','f'],
//     ['g','h','i']
// ];
// // 0 2
// // 1 1
// // 2 0
// for(let x = 0; x < arr.length; x++){
//     console.log(arr[x][arr.length-(x+1)]);
// }
// arr[arr.length-3]

// let string = prompt ('Введите слово')
// let letter = prompt ('Введите слово')

// const quantity = function(a,b){
//     let n = 0;
//     for(let i = 0; i < a.length; i++) {
//         if(a[i] === b){
//             n++
//         }
//     }
//     return n;

// }

// alert(quantity(string,letter));

// let num = +prompt ('Введите число')

// const factorial = function(a){
// let result = 1;
// for(let i = 1;i <=a; i++){
//     result *= i;
// }
//  return result
// }
// alert(factorial(num))

// let num = +prompt('От');
// let result = +prompt('До');

// const diap = function(a,b){
//     let arr= [];
//     for(let i = a; i <= b; i++){
//         arr.push([i])
//     }
//     return arr
// }
// alert(diap(num,result))


// const argument = function(){
//     console.log(
//         [...arguments]);
// }
// console.log(argument(1,2,3,4));

// № 2 
// const fact = function (n){
//     if (n === 1) return 1
//   else {
//     return n * fact (n-1);
// }
// }
// let num = +prompt ('Введите число')
// alert(fact(num))

//№ 3
// function f(n){
//     if (n <= 1) return n;
//     return f(n-1) + f(n-2)

// }
// let num = +prompt('Введите число')
// alert(f(num))

// let c = +prompt ('Введите градус')
// let f = 1.8 * c + 32;
// alert (f)
// let cels = +prompt('введите градус')
// let f = 0;
// const temperat = function (a){
//   f =  (1.8 * a) + 32;

// }
// alert(temperat(cels));
// alert(f)

// function temper (c){
//     return (c * 1.8 + 32)
// }
// console.log(temper(15))

// const diap = function (n){
//     let arr = [];
//     if(n < 1) for( let i = 1; i >= n;i--)arr.push(i);
//     else for ( let i = 1;i <= n; i++) arr.push(i);
//    return arr.join() 
// }

// console.log(diap(10));


//  let number = +prompt ('Введите время')

//  const sec = function (n){
//      if(n >= 0 && n <= 15) return ('Первая четверть');
//      else if(n > 15 && n <= 30) return ('Вторая четверть')
//      else if(n > 30 && n <= 45) return ('Третья четверть')
//      else if(n > 45 && n <= 59) return ('Четвертая четверть')
//      else return ('Не получилось')
// }
// alert(sec(number))
// let chas = +prompt('Введите часы') 
// const min = function (n){
//   return (n * 60 * 60) + ' секунд';
// }
// alert(min(chas))

// const per = function(first,second){
//     if(first % second === 0) return('True')
//     else return ('False')
// }
// console.log(per(19,2));



// лифт

let elevator = {
    floor:1,
    minFloor:1,
    maxFloor:16,
    upOneFloor(a){
        this.floor ++,
        printFloor()
    },
    dowOneFloor(b){
        this.floor --,
        printFloor ()
    },
    printFloor(){
        console.log('Вы на "this.Floor"этаже');
        
    }
}
