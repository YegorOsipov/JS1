'use strict';

// let a = 10;
// alert(a);

// a = 20;
// alert(a); 

// let a = 1 + 2 + 3;
// alert(a);

// let a = 2,
//     b = 10;
// alert(a**b);

// let str1 = 'java',
//     str2 = 'script';
// alert(str1 + str2);

// let str1 = 'hello',
//     str2 = 'world';
// alert(str1 + ' ' + str2);

// let name = 'Egor';
// alert('привет, ' + name);

// let age = 31;
// alert('мне ' + age + ' год');

// alert('abc d'.length);

// let str = `a
// b
// c`;
// alert(str);


// let a;
// alert(a);

// let a = null;
// alert(a);

// let a = true;
// alert(a);

// let b = false;
// alert(b);

// let str1 = 'abc',
//     str2 = 'def';
// alert(str1 * str2);

// alert(10 / 0);
// alert(-10 / 0);

// // Найдите количество секунд в сутках.
// let a = 60 * 60 * 24;
// alert('количество секунд в сутках = ' + a + ' сек');

// // Найдите количество секунд в 30 сутках.
// let a = 60 * 60 * 24 * 30;
// alert('количество секунд в месяце = ' + a + ' сек');

// // Найдите количество секунд в году.
// let a = 60 * 60 * 24 * 365;
// alert('количество секунд в году =' + a + ' сек');

// // Найдите количество минут в сутках.
// let a = 60 * 24;
// alert('количество минут в сутках = ' + a + ' мин');

// // Найдите количество минут в году.
// let a = 60 * 24 * 365;
// alert('количество минут в году = ' + a + ' мин');

// let a = '10',
//     b = '20';
// alert(Number(a) + Number(b));

// let a = +'2';
// let b = +'3';
// alert(a + b); 

// Дана переменная со значением 5px и переменная со значением 6px. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.

// let a  = parseFloat('5.5px'),
//     b = parseFloat('6.25px');
// console.log(a + b + 'px');

// let a = 22,
//     b = 55;
// console.log(String(a) + String(b));

// // Дана переменная с числом. Найдите количество цифр в этом числе.
// let a = 98765423;
// console.log(String(a).length);

// // Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
// let a = 5673,
//     b = 988735243;
// console.log(String(a).length + String(b).length);

// console.log(String(true));

// console.log( String(true) + Number(true) );

// let test = Boolean('abc');
// console.log(test);

// let test = Boolean('');
// console.log(test);

// let test = Boolean(true);
// console.log(test);

// let test = Boolean(false);
// console.log(false);

// let test = Boolean(1 / 0);
// console.log(test);

// Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

// let a = 'abcde';
// console.log(a[0]);
// console.log(a[2]);
// console.log(a[4]);

// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

// let str = 'abcde';
// let str1 = str[4] + str[3] + str[2] + str[1] + str[0];
// console.log(str1);

// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

// let str = 'abcde',
//     num = 2;
// console.log(str[num]);

// // Дана строка. Выведите на экран ее последний символ.
// let str = 'gogsyan';
// console.log(str[str.length - 1]);

// // Дана строка. Выведите на экран ее предпоследний символ.
// let str = 'gogsyan';
// console.log(str[str.length - 2]);

// Дана строка '12345'. Найдите сумму цифр этой строки.

// let str = '12345';
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

// Дано число 12345. Найдите сумму цифр этого числа.
// let str = String(12345);
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

// // Дано число 12345. Найдите произведение цифр этого числа.
// let str = 12345;
// str = String(12345);
// console.log(str[0] * str[1] * str[2] * str[3] * str[4]);

// Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let str = 12345;
str = String(12345);
let str1 = str[4] + str[3] + str[2] + str[1] + str[0];
console.log(str1);