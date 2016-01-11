
for(i=1;i<=100;i++){
  var output = i;
  if (i%5==0) output = "Buzz";
  if(i%3==0){
    output = "Fizz";
    if(i%5==0){
      output += "Buzz";
    }
  }
console.log(output);
}
