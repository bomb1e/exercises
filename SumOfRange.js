function range(start, end, step){
  var arr = [];
  if(arguments.length < 3) var step = 1;
  if((end > start)&&(step > 0)) var noOfItems = (end - start) + 1;
  else var noOfItems = (start - end) + 1;

  for(i = 0; i < noOfItems; i++)
    if(((start <= end)&&(step > 0))||((end <= start)&&(step < 0))){
      arr.push(start);
      start += step;
    }
  return arr;
}
function sum(arr){
  var sum = 0;
  for(i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
console.log("Range: " + range(1, 10, 2));
console.log("Sum: " + sum(range(1, 10, 2)));
