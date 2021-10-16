function lonelyinteger(a) {

  //a = [1,2,3,4,1,2,3]

  let newArr = a;
  newArr.sort((a, b) => { return a - b })
  let i = 0;

  if (a.length < 2) {
    return a;
  } else {


    for (; i < a.length; i += 2) {
      if (newArr[i] == newArr[i + 1]) {
        continue;
      } else {
        break;
      }

    }
  }

  return newArr[i]

}
console.log(lonelyinteger([1, 2, 3, 4, 1, 2, 3]));