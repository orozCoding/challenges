let age = prompt("Type your age");



/* Codigo og.
    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }

*/

/* Codigo con ? 

function checkAge(age) {
return (age > 18) ? true : confirm("what?");
}

*/

// Intentando obligar que sea un número // CÓDIGO CON ÉXITO

/*

function checkAge(age){

  if (age.tipeOf = Number && age >= 18){
    alert("Ok you can go ahead")
  } else if (age.tipeOf = Number && age < 18) {
    alert("You're too little")
  } else {
    alert("That's not a number, mate");
  }

}
*/

function checkAge(age){

  return (age.tipeOf = Number && age >= 18) ? alert("Ok you can go ahead")
          : (age.tipeOf = Number && age < 18) ? alert("You're too little")
          : alert("That's not a number, mate");



}

// Intentando simplificar codigo anterior.

    checkAge(age);

