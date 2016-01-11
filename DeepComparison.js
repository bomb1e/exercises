var status = true;
function deepEqual(a,b){
  if((a!=null)&&(b!=null)){
    if((typeof(a)!="object")&&(typeof(b)!="object")) {
    return a===b;
  }
}
  for(var i in a) {
    if((i in b) && status) {
      status = deepEqual(a[i],b[i]);
    }
  }
  return status;
}

var a = {
  esc: 1,
  back: 2,
  df: 3,
}

var b = {
  esc: 1,
  back: 2,
  df: 3,
}

console.log(deepEqual("x","x"))
console.log(deepEqual(a,b))
