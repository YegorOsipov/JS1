// Выведите столбец чисел от 1 до 100.
let num = 1;
while (num <= 100) {
    console.log(num);
    num++;
}

for (let i=1; i<=100; i++) {
    console.log(i);
}

// Выведите столбец чисел от 11 до 33.
let num1 = 11;
while(num1 <= 33) {
    console.log(num1);
    num1++;
}

for (let i=11; i<=33; i++) {
    console.log(i);
}

// Выведите столбец четных чисел в промежутке от 0 до 100.
let number = 0;

// while (number <= 100) {
//     console.log(number);
//     number = number + 2;
// }

for (let i=0; i<=100; i=i+2) {
    console.log(i);
}

// С помощью цикла найдите сумму чисел от 1 до 100.
let i = 0,
    result = 0;

// while (i <= 100) {
//     result = result + i;
//     i++;
// }
// console.log(result);

for (let i = 0; i <= 100; i++) {
    result = result + i;
}
console.log(result);

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let resultate = 0;
let arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

for (i = 0; i < arr.length; i++) {
    resultate = resultate + arr[i];
}
console.log(resultate);

// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
const obj = {
    green: 'зеленый', 
    red: 'красный', 
    blue: 'голубой'
};

for (let key in obj) {
    console.log(key + ': ' +  obj[key]);
}

// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

const object = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};

for (let key in object) {
    console.log(key + ' - ' + 'зарплата ' + object[key] + ' долларов.');
}

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10

const arr1 = [2, 5, 9, 15, 0, 4];

for (i = 0; i < arr1.length; i++) {
    
    if (arr1[i] > 3 && arr1[i] < 10) {
        console.log(arr1[i]);
    }
}

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
const arr2 = [2, -5, 6, -17, 22];
let result1 = 0;

for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) {
        result1 = result1 + arr2[i];
    }
}
console.log(result1);