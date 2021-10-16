function breakingRecords(scores) {
    
    let lowestScore = scores[0];
    let highestScore = scores[0];
    let sumHightBreak = 0;
    let sumLowBreak = 0;

    let i = 0;

    while (i < scores.length){
        if (scores[i] > highestScore) {
            sumHightBreak += 1;
            highestScore = scores[i];
            i++;
        } else if (scores[i] < lowestScore){
            sumLowBreak += 1;
            lowestScore = scores[i];
            i++;
        } else {
            i++;
            continue;
        }


        
    }

    let array = [sumHightBreak, sumLowBreak];
    return array;



} console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]));