function countApplesAndOranges(st, ab, totalFruits, appleDistances, orangeDistances) {
    let startPoint = st[0];
    let endingPoint = st[1];
    let appleTreeLocation = ab[0];
    let orangeTreeLocation = ab[1];
    let appleTotal = totalFruits[0];
    let orangeTotal = totalFruits[1];
    let i = 0;
    let x = 0;
    let applesInHouse = 0;
    let orangesInHouse = 0;

while (i < appleDistances.length){
    if ((appleDistances[i]+appleTreeLocation) >= startPoint && (appleDistances[i]+appleTreeLocation) <= endingPoint){
        applesInHouse += 1;
        i++;
    } else {
        i++;
    }
}


while (x < orangeDistances.length){
    if ((orangeDistances[x]+orangeTreeLocation) >= startPoint && (orangeDistances[x]+orangeTreeLocation) <= endingPoint){
        orangesInHouse += 1;
        x++;
    } else {
        x++;
    }
}

// console.log(applesInHouse);
// console.log(orangesInHouse);
console.log(applesInHouse);
console.log(orangesInHouse);

 



} console.log(countApplesAndOranges([7,11],[5,15],[3,2],[3,2,1],[-7,-6]))