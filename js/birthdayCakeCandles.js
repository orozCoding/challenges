function birthdayCakeCandles(candles) {
    candles = candles.sort((a, b) => b - a);

    let i = 0;
    let x = 1;
    let num = 1;

    while (i < candles.length){
        if (candles[i] == candles[x]) {
            num ++;
            i ++;
            x ++;
            continue;
        }
        break;
    }

    return num;

}

let candles = [4,4,1,3,5,2,5,5,1,4];

console.log(birthdayCakeCandles(candles));