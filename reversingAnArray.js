function reverseArray(arr){
  var reversedArr = [];
  for(i = arr.length - 1; i >= 0; i--)
    reversedArr[arr.length - 1 - i] = arr[i];
  return reversedArr;
}
function reverseArrayInPlace(arr) {
  var length = arr.length;
  var left = 0;
  var right = length - 1;
  while(left < right) swap(arr, left++, right--);
  return arr;
}
function swap(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(reverseArray([12, 1231, "bob", "arr", 245624, "uuui"]));
console.log(reverseArrayInPlace([12, 1231, "bob", 245624, "uuui"]));
