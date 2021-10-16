function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let startPoint = s;
    let endingPoint = t;
    let appleTreeLocation = a;
    let orangeTreeLocation = b;
    // let appleTotal = totalFruits[0];
    // let orangeTotal = totalFruits[1];
    let i = 0;
    let x = 0;
    let applesInHouse = 0;
    let orangesInHouse = 0;

while (i < apples.length){
    if ((apples[i]+appleTreeLocation) >= startPoint && (apples[i]+appleTreeLocation) <= endingPoint){
        applesInHouse += 1;
        i++;
    } else {
        i++;
    }
}


while (x < oranges.length){
    if ((oranges[x]+orangeTreeLocation) >= startPoint && (oranges[x]+orangeTreeLocation) <= endingPoint){
        orangesInHouse += 1;
        x++;
    } else {
        x++;
    }
}

// console.log(applesInHouse);
// console.log(orangesInHouse);
// let string;
// return string = `${applesInHouse}\n${orangesInHouse}`;

console.log(applesInHouse);
console.log(orangesInHouse);
 

} console.log(countApplesAndOranges(7,11,5,15,[3,2,1],[-7,-6]))

// } console.log(countApplesAndOranges([7,11],[5,15],[3,2],[3,2,1],[-7,-6]))