function arrayToList(arr){
  var list = {};
  var i = 0;
  popList(arr, arr[i], list, i);
  return list;
}

function popList(arr, value, list, i){
  if(i < arr.length){
    list.value = value;
    list.rest = {};
    popList(arr, arr[++i], list.rest, i);
  }
  if(i == arr.length) list.rest = null;
}
function prepend(element, list){
  var newList = {
    value: element,
    rest: list
  }
  return newList;
}

function nth(list, position){
  var i = 0;
  var value;
  return find(list, position, value, i)
}


function find(list, position, value, i){
  if(position == i++) value = list.value;
  if(list.rest) find(list.rest, position, value, i);
  return value;
}

function listToArray(list){
  var arr = [];
  popArr(arr, list);
  return arr;
}

function popArr(arr, list){
  arr.push(list.value);
  if(list.rest) popArr(arr, list.rest);
}


console.log(arrayToList([1,2,3]));
console.log(prepend(20,arrayToList([1,2,3])));
console.log(nth(prepend(20,arrayToList([1,2,3])), 20));
console.log(listToArray(arrayToList([1,2,3,45,63,346,2,5,3,2])));
