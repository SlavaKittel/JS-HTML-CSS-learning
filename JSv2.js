"use strict";

// import { number } from "prop-types";

// import { func } from "prop-types";

// import { func } from "prop-types";

 // это значит что мы пишем на стандарте ES6

// function first(callback) {
// 	setTimeout( function(){
// 		console.log(1);
// 		}, 500);
// 		callback;
// }

// function second(){
// 	console.log(2);
// }

// first();
// second();

// let persone = {
// 	name: "Slava",
// 	age: 29,
// 	isMarried: false
// };

// function myFunction() {
// 	document.getElementById("demo").innerHTML = "Hello JavaScript!";
// 	document.getElementById("demo").style.color = "red";
// }
// // one line comment
// /* 2lines and more lines */

// var leftBorderWith = 118;
// let second = 2;
// const pi = 3.24;
// console.log(leftBorderWith);

// console.log(persone.name);
// console.log(persone.age);

// let xx = ['images.jpg', 'xxx.jpg'];

// console.log(xx[0]);

// alert("Hello!");

// let answer=confirm("Where u?");

// console.log(answer);

// let answer=+prompt("How old are u?");

// console.log(typeof(answer));

// console.log(5 + " - object");

// console.log("3" && 3);

// console.log("3" != 3);

// console.log("3" != 3);

// Условие!!

// if (2*4 == 87) {
// 	console.log("false");
// } else { 					// v protivnom sluchae ,budet true
// 	console.log("true");
// };

// let num = 150;

// if (num < 49) {
// 	console.log('false')
// } else if (num > 100) {
// 	console.log('very much')
// } else {						// esli <49 and > 100
// 	console.log('true')
// }

// (5*10 == 50) ? console.log('true') : console.log('false'); // korotka zapis
// (num == 50) ? console.log('true') : console.log('false');
// тринарный оператор

// switch (num) {
// 	case num < 49:
// 		console.log('false');
// 		break;
// 	case num > 100:
// 		console.log('very much');
// 		break;
// 	case num > 80:
// 		console.log('still very much');
// 		break;
// 	case 50:   // убираем == просто записываем это значение
// 		console.log('true');
// 		break;
// 	default:
// 		console.log('Error');
// 		break;
// }

// let num = 50;

// // while (num < 55) {
// // 	console.log(num);
// // 	num++;
// // }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	if (i == 6) {
// 		break;              // остановка
// 	}
// 	console.log(i);
// };

// for (let i = 1; i < 8; i++) {
// 	if (i == 6) {
// 		continue			// убирание цикла
// 	}
// 	console.log(i);
// };

// let x = 4; alert(x++)

// let a = 1;
// console.log(a++);    // 1
// console.log(a);      // 2
// let b = 1;
// console.log(b--);    // 1
// console.log(b);      // 0

// // Increment
// let c = 1;
// console.log(++c);    // 2
// console.log(c);      // 2
// // Decrement
// let d = 1;
// console.log(--d);    // 0
// console.log(d);      // 0

// console.log([] + false - null + true);

// console.log(0 && 6 && 555);

// function showFirstMessage(text) {
// 	alert(text);
// 	let num=10;								//localnja peremennaja
// }

// showFirstMessage("Hello World");
// function calc(a,b) {
// 	return (a + b);
// }
// let calc=(a,b) => a+b;

// console.log(calc(3,4));

// function retVar () {
// 	let huj = 50;
// 	return huj;
// }
//  let anothetNum = retVar ();
//  console.log(anothetNum);

//  let str="test";

//  console.log(str.length);				//4

//  console.log(str.toUpperCase());		//TEST
//  console.log(str.toLowerCase());		//teset

// //  let x="12.2"

// //  console.log(Math.round(x));    			//12

//  let x="12.2px";

//  console.log(parseInt(x));   				//12
//  console.log(parseFloat(x));   				//12.2

// ...................  LEARN JAVASCRIPT ............................ //

// var message;

// message = 'Hello!';

// message = 'World!'; // заменили значение считывает последнее

// alert( message );

// var hello = 'Hello world!';

// var message;

// // скопировали значение
// message = hello;

// alert( hello ); // Hello world!
// alert( message ); // Hello world!

// var admin, name;

// name = "Slava";

// admin=name;

// alert(admin);

// var huj;

// huj ="50";

// alert(+huj+ +huj);

// let test=prompt("What is your name?", "");

// alert(test);

// let mydr=prompt('when is my dr?', "");

// if (mydr != "03.09.1989" ) {
// 	alert ("no");
// } else {
// 	alert ("yes");
// }

// let value=prompt("write number!", "mozhet 0");

// if (value > 0 ) {
// 	alert ("1");
// } else if (value < 0) {
// 	alert (-1);
// } else {
// 	alert (0);
// }

///////////////////////////////////

// let value=prompt("What is your login?", "");

// if (value == "Admin" ) {

// 	let value2=prompt ("Password", "********");

// 	if (value2 == "Black Vlastelin") {
// 	alert("Welcome");
// 	} else if (value2 == null) {
// 	alert("Password error");
// 	} else {
// 	alert ("Login canceled");
// 	}

// } else if (value == null ) {
// 	alert ("I don't know you!");
// } else {
// 	alert ("Login canceled");
// }

/////////////////////////////////////////

// var result;

// let a=3, b=0;

// result = (a + b < 4) ? "many" : "much";

// alert(result);

//////////////////////////////////////////
// let value = prompt ("Password", "********");

// let message = (value == 'admin') ? "Black Vlastelin":
// (value == '123') ? 'yhjgl':
// (value == '') ? 'Login canceled': 'da ladno?';

// alert(message);

// if (value2 == "Black Vlastelin") {
// alert("Welcome");
// } else if (value2 == null) {
// alert("Password error");
// } else {
// alert ("Login canceled");
// }
//////////////////////////////////////////

// let age=prompt('how old?','');

//  if (age < 14 || age > 90) {
//      alert("Enter")
//  }

//////////////////////////////////////////

// let age=prompt('how old?','');

// if (!(age < 14 || age > 90)) {
//      alert("Enter")
// }

//////////////////////////////////////////

// alert("\n 21 \n " == 21)

//////////////////////////////////////////

// var i = 0;
// for (; i < 3;) {
//   alert( i );
//   i++;
// }

//////////////////////////////////////////

// var sum = 0;

// while (true) {

//   var value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;
// }
// alert( 'Сумма: ' + sum );

//////////////////////////////////////////

// var i;
// for(i=2; i < 11; i++) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }

//////////////////////////////////////////

// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;
// while (i<10) {
//   alert( "номер " + i + "!" );
//   i++;
//   if(i=3) break;  // why??
// }

//////////////////////////////////////////

// while (true) {

// var value = prompt("Введите число больше 100", '');

// if(value == null || value > 100) break;
// }

///////////////////////////////////////////

// var i;
// for(i=2; i < 11; i++) {
//   if (i % 2 == 0);
//   alert(i);
// }

///////////////////////////////////////////

// var i;
// var x;
// test: for(i=2; i < 15; i++) {

//   for(x=2; x < i; x++) {
//     if (i % x == 0) continue test;
//   }
//   alert(i);
// }

///////////////////////////////////////////

// var browser='Opera'

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

///////////////////////////////////////////

// var browser='Chrome2'

// if (browser == "Opera") {
// alert("Welcome");
// } else if (browser == "Chrome" || browser == "Chrome2") {
// alert("NET");
// } else {
// alert ("DEFAULT");
// }

///////////////////////////////////////////

// var a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

///////////////////////////////////////////

// var a = +prompt('a?', '');

// switch(a) {
//   case 0:
//     alert('0');
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   case (null || NaN):  // doesn't work! why??
//     alert(4);
//   }

///////////////////////////////////////////

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// var age = prompt('age?');

///////////////////////////////////////////

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// var age = 12;

//  if (checkAge(age)) {
//     alert( 'Доступ разрешен' );    // true
//   } else {
//     alert( 'В доступе отказано' ); // false
//   }

///////////////////////////////////////////

//   function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// var age = 52;

//  if (checkAge(age)) {
//     alert( 'Доступ разрешен' );    // true
//   } else {
//     alert( 'В доступе отказано' ); // false
//   }

///////////////////////////////////////////

// function getMinimumValue(a,b) {
//   var a = +prompt('insert value a', '');
//   var b = +prompt('insert value b', '');
//   alert(a + b);

//  if (a > b) {
//    return b;
//  }
//  else  {
//    return a;
//  }

// }

// getMinimumValue();

/////////////////////////////////////////20//

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//     return confirm('Родители разрешили?');
//     // can replace else {return confirm...} :no difference
// }

// var age = prompt('Ваш возраст?');

// if (checkAge(age)) {
//   alert( 'Доступ разрешен' );
// } else {
//   alert( 'В доступе отказано' );
// }

///////////////////////////////////////////

// function getMinValue(a, b) {
//   if (a > b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var a = prompt('insert value a!');
// var b = prompt('insert value b!');

// if (a > b) {
//   alert(a)
// } else if (b > a) {
//   alert(b)
// }

///////////////////////////////////////////

// var a=1;
// var b=-25;

//   function getMinValue(a, b) {
//     if (a > b) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//     if (getMinValue(a, b)) {
//     alert(b);
//   } else {
//     alert(a);
//   }

///////////////////////////////////////////

// var x = +prompt('insert value x!');
// var n = +prompt('insert value n!');

// function getMinValue(x, n) {
//   return (x ** n);
// };

// alert(getMinValue(x, n));

///////////////////////////////////////////.

// var age = +prompt("Сколько вам лет?", 20);

// if (age >= 18) {
//   function sayHi() {
//     alert( 'Прошу вас!' );
//   }
// } else {
//   function sayHi() {
//     alert( 'До 18 нельзя' );
//   }
// }

// sayHi();  //Function Declaration при use strict видны только внутри блока, в котором объявлены.
//Так как код в тут выполняется в режиме use strict,
//то будет ошибка.

///////////////////////////////////////////

// function pow(x, n) {
//   if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//     return x * pow(x, n - 1);
//   } else {
//     return x;
//   }
// }

// alert( pow(2,3) );

//////////////////////callback learnJS///////////////////////

// function ask(q123, hgf, yh) {
//   if (confirm(q123)) hgf()
//   else yh();
// }

// function showOk() {
//   alert( "Вы согласны." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }

// // использование: функции showOk, showCancel передаются в
// // качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);

////////////////////callback/////////////////////////

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   alert('Finished my homework');
// });

//////////////////////callback udobnaja zapis///////////////////////

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }
// function alertFinished(){
//   alert('Finished my homework');
// }
// doHomework('math', alertFinished);

//////////////////arrow function///////////////////////////

// let sum = (a, b) => a + b;

// /* Функция-стрелка более краткая форма для:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

/////////////////////////////////////////////

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет') :
//   () => alert("Здравствуйте!");

// welcome(); // теперь всё в порядке

/////////////////////////////////////////////

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   function(){
//     return alert('Привет')
//   }:
//   function(){
//     return alert("Здравствуйте!")
//   };

// welcome(); // теперь всё в порядке

//////////////////Многострочные стрелочные функции///////////////////////////

// let sum = (a, b) => a + b;

// /* Функция-стрелка более краткая форма для:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

//////////////////запись короткая для функции выше///////////////////////////

// let sum = (a, b) => a + b

// alert( sum(5, 2) ); // 3

/////////////////////////////////////////////

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },                //у меня нету пониманиия этого кода - fucntion expression
//   function() { alert("Вы отменили выполнение."); }
// );

////////////////////перевод функции выше в стрелочну/////////////////////////

// let ask=(question, yes, no)=> {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

/////////////////////////////////////////////

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 0) {
//   alert(`Степень ${n} не поддерживается,
//     введите целую степень, большую 0`);
// } else {
//   alert( pow(x,n) );
// }

/////////////////////////////////////////////

// const user = {
//   name: "John"
// };

// user = {
//   name: "Pete"
// };

// alert(user.name); // 25

/////////////////////////////////////////////

// задача

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {
//   name: "John",
//   surename: "Smith"
// };

// user.name = "Pete";

// delete user.name;

// alert(user.name);
// alert(user.surename);

/////////////////////////////////////////////

// let schedule = {
// };

// function ert(schedule) {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }

// alert(ert(schedule));

/////////////////////////////////////////////

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum)

/////////////////////////////////////////////

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// };

// ????????????????
// alert(multiplyNumeric(menu.key)); ????????????
// ????????????????

/////////////////////////////////////////////

// var a = +prompt("first number", 2);
// var b = +prompt("second number", 4);

// let calculator = {

//   sum(){
//     return this.a + this.b
//   },
//   read (){
//     this.a = +prompt("",2);
//     this.b = +prompt("",2);
//   }

// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

/////////////////////////////////////////////

// let ladder = {
//   step: 0,

//   up() {
//     this.step++;
//     return this;
//   },

//   down() {
//     this.step--;
//     return this;
//   },

//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().up().down().up().showStep(); // 2

/////////////////////////////////////////////

// let obj = {a=b};

// function A(name) {
//   return obj;
// }

// function B(slava) {
//   return obj;
// }

// let a = new A();
// let b = new B();

// alert(a == b); // true

/////////////////////////////////////////////

// function Calculator(name2) {
//   this.name3 = name2;
// }

// let calculator = new Calculator("Slava");

// var a = +prompt("first number", 2);
// var b = +prompt("second number", 4);

// let calculator = {
//   sum() {
//     return a + b;
//   },
//   mul() {
//     return a * b;
//   },
// };

// // calculator.read();

// // alert(calculator.name3);
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

/////////////////////////////////////////////

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     alert("mul=" + this.a * this.b)
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// calculator.mul();
// alert( "Sum=" + calculator.sum() ); //нужно выщвать после read() т.к. нужно задать +prompts

/////////////////////////////////////////////

// var a = +prompt("first number", 2);
// var b = +prompt("second number", 4);

// function Calculator() { 
//   sum() {                       // ERORR!
//     return a + b;
//   }
// }

// let calculator = new Calculator ();

// alert( "Sum=" + calculator.sum() );
// // alert( "Mul=" + calculator.mul() );

////////////////////////////////////////////

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

////////////////////////////////////////////

// function Accumulator(value) {
//   this.value = value;

//   this.read = function() {
//     this.value += +prompt('number?', 0);
//   };

// }

// let accumulator = new Accumulator(10);

// accumulator.read();
// accumulator.read();


// alert(accumulator.value)

////////////////////////////////////////////

// let a = +prompt("first number", 2);
// let b = +prompt("second number", 4);

// let sum = a + b;

// alert(sum)

////////////////////////////////////////////

// function readNumber() {
//     let num;
  
//     while ( !isFinite(num) ){
//         num = prompt("Введите число", 0);
//     };
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Число: ${readNumber()}`);

////////////////////////////////////////////

//   let i = 0;
// while (i != 10) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

////////////////////////////////////////////

// let min = +prompt("first number", 2);
// let max = +prompt("second number", 4);


// function random(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// alert( random(min, max) );

// function sum(a, b) {
//     return a + b;
//   }
  
//   alert(`1 + 2 = ${sum(1, 2)}`); // 1 + 2 = 3.

////////////////////////////////////////////

// let str = `Hello`;

// // получаем последний символ
// alert( str[str.length - 6] ); // o

////////////////////////////////////////////

// let str = '';

// for (let i = 220; i <= 300; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );

////////////////////////////////////////////

// let number = prompt("first number", "");

// let i;

// for (i=0; i < 20; i++) {
//     number += number[i]
// }

////////////////////////////////////////////

// function camelize(str) {
//     return str
//       .split('-')
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         // if (index == 0) {
//         //    (word, index) => word;
//         //     } else {
//         //    (word, index) => word[0].toUpperCase() + word.slice(1);
//         // }
//       )
//       .join('');
//   }

//   alert( camelize("background-color") );

  ////////////////////////////////////////////

  // function filtered[arr] {
  //   return arr
  //     .split('-')
  // }

  // alert( filtered[2, 5, 7, 1] );

////////////////////////////////////////////

// Шаблон вызова функции
// var func = function(a, b) {
//     return a + b;
// };

// console.log( func(1, 3));

// var MYAPP = (function () {
  
//   // Шаблон вызова функции //
//   var funcPrivate = function () { //  metody privatnyj.
//     console.log(this);
//     return 'private';
//   };

//   return {
//   // Шаблон вызова метода(как свойства) //
//   func: function (a, b) { //  esli v funkcii 
//                           //  funkcija javljatsja svoistvom = method function
//     console.log ( this ); //  metody byvajut zakrytymi(private) i otkrytimi . 
//                           //  Tut est' contecst ot this = open(public) method

//     var that = this;      // reshenie problemy kak vyzvat function nize ne globalno

//     var helperFunc = function (c, d) { 
//         console.log(this);
//         console.log(that);
//         that.multiply = c*d;
//         // Daze function vazvannaja shablonom funkcii vnutri globalnogo objecta
//         //  vnutri wablona metoda budet globalnja(ne polchaetsja obratitsja k objektu
//         // MYAPP - eto chastja owibka)
//     };

//     helperFunc(a, b);

//     return a - b;
//   },

//   funcPublic: funcPrivate // vyzov privatnogo metoda cherez publichnyj, togda
//                           // on vyzovetsja
// }

// })();

// console.log( MYAPP.func(2, 6) )
// console.log( MYAPP.funcPublic() ) 
// console.log( MYAPP.multiply )

// var arr = [20,5];
// var add = function (a, b) {
//     // console.log(  this.func(10,3) ); // f. add vyzavaet vse Piblichnye metody 
//                                      // s globalnogo argumenta MYAPP
//     return a + b; 
// }

// Shablon vyzova metoda APPLY - mozem peredovat v ljubuju f. ljuboj contecst
// var sum = add.apply( MYAPP, arr);
// console.log (sum);

// Shablon vyzova Constructora

//////////////////////////////////////////////////


// let arr2 = [5, 3, 8, 1, 4, -2, 5, -0, 3.5, -3];

// function filterRangeInPlace (arr2, a, b) {
    
// for (let i = 0; i < arr2.length; i++) {
//       let val = arr2[i];
//       if (val < a || val > b) {
//         arr2.splice(i, 1);
//         // i--;
//       }
//     }
// };

// filterRangeInPlace(arr2, 0, 4);

// console.log(arr2);

// let g = 5;

// console.log(g--);
// console.log(g);

//////////////////////////////////////////////////

// let arr3 = [5, 2, 1, 15, -2];

// function compareNumeric(a, b) {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// }

// arr3.sort(compareNumeric);

// console.log(arr3);

//////////////////////////////////////////////////

// let arr3 = ["HTML", "JavaScript", "CSS"];

// // function copySorted() {
// //   return arr3.map(item => item.length);
  
// // }

// let sorted = arr3;


// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// sorted.sort(compareNumeric);

// console.log(sorted);

//////////////////////////////////////////////////

// Lineinyj poisk // lineae

// const arr5 = [1,2,3,4,5,6,7,8];

// // 0(n)
// function searchElement(arr4, el) {
//   for (let i = 0; i < arr4.length; i++)
//    if (arr4[i] === el) {
//      return i;
//    }
//    return 'pisja';
// }

//////////////////////////////////////////////////

const arr10 = [1,5,3,7,4,2,8,5,8,10];

arr10.sort((a,b) => a - b);

// arr10.sort(function (a, b) {
//   console.log(a + "<>" + b);
// });

// Binarnjy poisk  // ben-search

// 0(log N)
function binSearch(arr10, el) {
  let left = -1;
  let right = arr10.length;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (arr10[mid] === el) {
      return mid;
    }
    if (arr10[mid] > el) {
      right = mid;
    } else {
        left = mid;
      }
    }
    return -1;
}
 

function countFreq(arr10, el) {
  const posEL = binSearch(arr10, el);

  if (posEl === -1) {
    return 0;
  }

  let i = posEL;
  while (arr10[i] === el) {
    i--;
  }

  let j = posEL;
  while (arr10[j] === el) {
    j++;
  }

  return j - i - 1;
}

// console.log(countFreq(arr10, 5));

// LESSON 5.7 //

//////////////////////////////////////////////////

// Допустим, у нас есть массив arr. 
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(new Set(values));

console.log(Array.from(new Set(values)));

// Есть универсальный метод Array.from, 
// который принимает итерируемый объект или псевдомассив и делает из него «настоящий» 
// Array. После этого мы уже можем использовать методы массивов.

// or through FUNCTION 

function unique(arr) {
  return Array.from(new Set(arr)); 
}

console.log(unique(values));

//////////////////////////////////////////////////


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let map = new Map(Object.entries(arr));  // Objcect.entries - if u want get MAP from usual object! 

let map = new Map();

for (let i of arr) {
  let result = i.toLowerCase().split("").sort().join("");
  map.set(result, i)
  // console.log(map.set(result, i));
}
console.log( Array.from(map.values()) );  // .values - sort arr MAP by "values"(strings)

//////////////////////////////////////////////////

let map2 = new Map();

map2.set("name", "John");

let keys = Array.from(map2.keys());

console.log(keys);

keys.push('more')

console.log(keys);

///////////////////////////////////////////////

// LESSON 5.8 //

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessage = new WeakSet();

readMessage.add(messages[0]);
readMessage.add(messages[1]);

readMessage.add(messages[1]);

console.log(readMessage.size); // WeakSet не поддерживает size! поддерживает просто Set.

console.log(readMessage.has(messages[0]));

messages.shift(); 

console.log(readMessage);

///////////////////////////////////////////////

let readMessage2 = new WeakMap();

readMessage2.set(messages[1], new Date() );
readMessage2.set(messages[0], new Date() );

messages.shift();

console.log(readMessage2);

///////////////////////////////////////////////


