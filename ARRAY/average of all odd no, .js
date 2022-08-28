//Problem 3 : Given an array of numbers find the average of all the odd numbers.

var arr= [1,2,3,4,5,6];
var sum=0;
var count=0;

for(let p=0; p<arr.length; p++){
  if(arr[p]%2==1){
    sum=sum+arr[p];
    count++;
  }
}
console.log(sum/count);

//0p=======> 3