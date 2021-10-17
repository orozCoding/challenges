function plusMinus(arr){

let positives = 0;
let negatives = 0;
let zeros = 0;

let i = 0;

while (i<arr.length){
  
  if (arr[i] == 0) {
    zeros += 1;
  }
  else if (arr[i] < 0){
    negatives += 1;
  }
  else if (arr[i] > 0) {
    positives += 1;
  }
  i++;
}

positives = (positives/arr.length).toFixed(6);
negatives = (negatives/arr.length).toFixed(6);
zeros = (zeros/arr.length).toFixed(6);

console.log(positives + "\n" + negatives + "\n" + zeros);

}

arr = [1,2,-1]

console.log(plusMinus(arr));