function isEven(N) {
  if(N < 0) N *= -1;
  if(N === 1) return false;
  else if(N === 0) return true;
  return isEven(N-2);
}

console.log(isEven(75));
