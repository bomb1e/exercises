var grid = 20;
var chessBoard = "";
i = 0;
while(i < grid){
  j = 0;
  while(j < grid){
    if((i+j)%2==0) chessBoard+=" ";
    else chessBoard+="#"
    j++;
  }
  chessBoard+="\n";
  i++;
}
console.log(chessBoard);
