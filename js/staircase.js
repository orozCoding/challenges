function staircase(n) {

  let i = 0;
  let string = "";
  let arr = [];

  while (i < n) {
    string += " ";
    i++;
  }
  
  console.log(i);

 // while (i > 0) {
   // string.replace(string.charAt(i), "#");
    //console.log(string);
    //i--;
  //}
}

console.log(staircase(6));