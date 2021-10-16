function aVeryBigSum(ar){

let sum = 0;

for (i=0;i<ar.length;i++)

sum += ar[i];

return sum;

}

ar = [1,2,3,4,5];
console.log(aVeryBigSum(ar));
