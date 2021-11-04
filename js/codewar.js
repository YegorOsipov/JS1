// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];

// function countSheeps(arrayOfSheep) {
//     let result = 0;
//     for (let elem of arrayOfSheep) {
//       if (elem == true) {
//         result += 1;
//       }
//     }
//     return result;
// }

// console.log(countSheeps(array1));

// function highAndLow(numbers){
//     let arr = [];
//     let arr1 = [];
//     let arr2 = [];
//     arr = numbers.split(' ');
//     for (let elem of arr) {
//         elem = Number(elem);
//         arr1.push(elem);
//     }
//     arr2.push(getMaxOfArray(arr1));
//     arr2.push(getMinOfArray(arr1));
//     let str = arr2.join(' ');
//     return str;
    
// }

// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }

// function getMinOfArray(numArray) {
// return Math.min.apply(null, numArray);
// }

// // краткое решение
// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }


// function century(year) {
//     let arr = String(year).split('');
//     if (arr[arr.length - 1] != 0 && arr.length == 4) {
//       return Number(arr[0] + arr[1]) + 1;
//     } else if (arr[arr.length - 1] != 0 && arr.length == 3) {
//       return Number(arr[0]) + 1;
//     } else if (arr[arr.length - 1] == 0 && arr.length == 4) {
//       return Number(arr[0] + arr[1]);
//     } else if (arr[arr.length - 1] == 0 && arr.length == 3) {
//       return Number(arr[0]);
//     } else {
//       return 1;
//     }
// }

// console.log(century(1222));

// function century(year) {
//     let sum = '';
//     let result = 0;
//     let arr = String(year).split('');
//     for (let i = 0; i < arr.length - 3; i++) {
//         if (arr[arr.length - 1] != 0) {
//             sum += arr[i];
        
//         }
//         if (arr[arr.length - 1] == 0) {

//         }
//     }
// }


function reverseList(list) {
    list.reverse();
}
console.log([1, 2, 3, 4]);