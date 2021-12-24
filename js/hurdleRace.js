function hurdleRace(k, height) {

let newArr = height.sort((a,b) => b -a);

let potionsNeeded = newArr[0] - k;

if (potionsNeeded <= 0){
    return 0;
} else {
    return potionsNeeded;
}


}