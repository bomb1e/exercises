function countBs(string) {
  return countChar(string, "B");
}
function countChar(string, character) {
  var count = 0;
  for(i = 0; i < string.length - 1; i++){
    if(string.charAt(i) == character) count++;
  }
  return count;
}
console.log(countBs("BomBie"));
