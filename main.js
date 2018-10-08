// console.log('Lection_6');


// // foo(5, 10);
// // bar();

// // function declaration
// function foo(a, b) {
//     console.log(a, b);
// }

// // function expression
// bar = function() {
//     console.log('bar');
// } 

// // формальные параметры принимают значение 
// // фактических соответственно


// a = 'ddjshjflksd';

// // foo(a, [87,2 ,3, 4]);
// // bar();


// // -------------------------------------


// // console.log();

// function sum(a, b) {
//     var res = 20 + a - b;
//     console.log(b);
//     return res;
// }

// // console.log(res);
// // console.log(sum(12, 7) + sum(2, 9));

// res = sum(sum(2, 10), 203);

// console.log(res);


// // ------------------------------

// function concat(a1, a2, a3){
//     return a1.concat( a2.concat(a3) );
// }

// // arr = concat([1, 2], [9, 2, 9], [2]);

// // for(i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }


// // ------------this


// console.log('Lection 8');

// // + Обьекты основы
// // + Свойства обьектов, методы обьектов
// // + Вложенные обьекты
// // + Перебор обьекта(for in), манипуляции свойствами, оператор delete



// arr = [ 1, 2, 3];

// // console.log( arr[0] );

// obj = {
//     name: 'Vasya',
//     'age': 20,
//     adress: {
//         city: 'Kiev',
//         street: 'Mechnikova',
//         postalCode: 03054,
//         siblings: [1, 2, 3]
//     }
// }

// key = 'city'

// console.log( obj[key] );


// console.log( obj.adress );
// for(i = 0; i < obj.adress.siblings.length; i++) {

// }

// obj.surname = 'Ivanov';
// delete obj.adress;

// console.log(obj)

// ------------------

// var data = {
//     sum: function(a, b){
//         return a + b;
//     }
// }

// data.sum(2, 3);

// ------------------

// перебор
// console.log(obj);
// // for(key in obj) {
// //     console.log( key, obj[key] );
// // }

// // ----------------------------------------------

// function sumSource(a, b){
//     // this -> context
//     console.log(this);
//     return a + b + this.x;
// }




// var data = {
//     x: 10,
//     y: 20,
//     sum: sumSource
// }

// var data2 = {
//     x: 20,
//     sum: sumSource
// }

// sumSource(2, 8);
// data.sum(1, 2);
// console.log(sumSource === data.sum)

// z = 200;
// console.log(window.z);
// window
// console.log(res);
// window.alert();
// document.write();
// window.prompt();

// Задача 1 

// obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// }

// function convert(obj) {
//     console.log(this);
//     for(key in obj){
//         console.log(obj[key]);
//     }
// // }

// function convert(obj){
// for (key in obj){
//     if (typeof obj[key] =="object"){
//         for(key2 in obj[key]){
//             obj[key2] = obj[key][key2]
//         }
//         delete obj[key]
//     }
// }
// return obj;

// }
// console.log(convert(obj));



// Написать функцию convert(obj), который будет хранится в window, он получает аргументом obj. Функция должена вернуть объект:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }



// list = [1,2,3,3];
// list.myPush = myPush;

// function myPush(item){
//     this[this.length] = item;
//     return this.length;
// }


// list.myPush(200);
// console.log(list);

// --------------------------------
// list = [1,2,3,3];
// list.myPop = myPop;

// function myPop(item){
//     this[this.length] = item;
//     return this.item--;
// }


// list.myPop();
// console.log(list);
// ============================
// var obj = {
//     x:10,
//     y:20,
//     list: [1, 7, 8, 9],
//     adress: {
//         city: 'Kiev'
//     },
//     renderObj: renderObj,
// };

// function render(){
//     for(var item in this){ 
//          if(this[item] === arguments.callee){
//             continue;
//          }
//          if(typeof this[item] === 'object'){
//              this[item].inner();
//              continue;
//          }         

//          document.write(item +':' + <br />);
//     }
//   }   



// Geka = {
//     age: 12,
//     money:{
//         day: 34,
//         month: 300
//     },
//     hight: 15,
//     waidth: 84
}


// console.log(Geka.money.day);




var time = {
  year: 2346,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
}

console.log(time); // (*)
time.microsecond++; // (**)