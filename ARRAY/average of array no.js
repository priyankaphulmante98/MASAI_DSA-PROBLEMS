//Problem 3 : Given an array of numbers find the average ofarr all numbers.


var arr= [1,2,3,4,5,6];
var count=0;
var sum=0;
for(c=0; c<arr.length; c++){
      sum=sum+arr[c];
      count++;
  }
console.log(count/sum);
// op=====>0.28