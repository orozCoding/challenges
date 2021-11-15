function bonAppetit(bill,k,b) {

    // Primero voy a sumar todo lo que esta en la cuenta, y, al dividirlo, seria lo que b cobro.



    let fullSum = 0;

    let i = 0;
    while (i < bill.length) {
        fullSum += bill[i];
        i++;
    }

    // removing girl not-eaten elements
    let newArr = [];
    i = 0;
    while (i < bill.length){
        newArr.push(bill[i])
            i++;
        
    }
    newArr.splice(k, 1);

    // Suming bill without what she didn't eat

    let fairSum = 0;
    i = 0;
    while (i < newArr.length) {
        fairSum += newArr[i];
        i++;
    }

    let fairCharge = fairSum / 2;

    if (b == fairCharge) {
        console.log("Bon Appetit");
    } else {
        let difference = b - fairCharge;
        console.log(difference);
    }

    
}


let bill = [3,10,2,9];
let k = [4,1];
let b = 7;

console.log(bonAppetit(bill,k,b));