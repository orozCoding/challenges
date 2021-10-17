function staircase(n) {
  let string = "";
  let i = 0;
  let arr = [];

  while (i < n) {
    arr.push(" ");
    i++;
  }
  console.log(arr);
  string = arr.join("");
  console.log(string);
  /*
  console.log("entrando al segundo loop");*/
  
  i -= 1;

  while (i >= 0) {
    //console.log(string.charAt(i))
    arr.splice(i, 1, "#");
    string = arr.join("");
    console.log(string);
    i--;  
  }
}

console.log(staircase(6));