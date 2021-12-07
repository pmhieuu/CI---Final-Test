// Bài 1:
/*
let arr = [];
let n;
do {
  n = Number(prompt("Enter a number of an array: "));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
  do {
    arr[i] = Number(prompt("Enter a number: "));
  } while (isNaN(arr[i]));
}
function adjacentElementsProduct(inputArray) {
  let sumArr = [];
  let max = 0;
  for (let i = 0; i < n - 1; i++) {
    sumArr[i] = arr[i] * arr[i + 1];
    if (sumArr[i] >= max) {
      max = sumArr[i];
    }
  }
  return max;
}
let highestSum = adjacentElementsProduct(arr);
console.log("Tổng lớn nhất của 2 số liên tiếp là: ", highestSum);
*/

//Bài 2:
/*
let arr = [];
let n;
do {
  n = Number(prompt("Nhập vào số lượng người chơi: "));
} while (isNaN(n) || n <= 0);

for (let i = 0; i < n; i++) {
  do {
    arr[i] = Number(prompt("Nhập cân nặng của từng người: "));
  } while (isNaN(arr[i]));
}

function alternatingSum(array) {
  let arr1 = [];
  let arr2 = [];
  let arrSum = [];
  let sum1 = 0;
  let sum2 = 0;
  let j = 0;
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr1[j] = arr[i];
      j++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      arr2[k] = arr[i];
      k++;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  console.log(arr1, arr2);
  arrSum = [sum1, sum2];
  return arrSum;
}

let output = alternatingSum(arr);

console.log("Tổng cân nặng của 2 team là:", output);
*/
