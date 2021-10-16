/* codigo OG
    function min(a,b){

        return a < b ? a : b;
     
    }
*/

let a;
let b;

function getAB() {
    a = prompt("Write A");
    b = prompt("Now write B");

}


getAB();

function min(a, b) {

    return (a < b) ? a : b;
}


console.log("A is " + a + " and B is " + b + ", y el menor es " + min(a, b));
