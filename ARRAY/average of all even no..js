//Problem 3 : Given an array of numbers find the average of all the even numbers.


var arr = [1,2,3,4,5,6];
var sum=0; 
var count=0;
for(let p=0; p<arr.length; p++){
  if(arr[p]%2==0){
    sum+=arr[p];
    count++;
  }
}console.log(sum/count); 
//op===> 4