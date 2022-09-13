//The goal of the function is to reverse every word in the string and return 
// Input :"The quick brown fox jumps over the lazy dog."
// output: 'ehT kciuq nworb xof spmuj revo eht yzal .god'


//approch 1 =================================> 
var str ="The quick brown fox jumps over the lazy dog."
var arr= str.split(" ");

var bag1= [];
for(let p=0; p<arr.length; p++){
     var bag2="";
  for(let q=arr[p].length-1; q>=0; q--){
      bag2=bag2+arr[p][q];
    }
    bag1=bag1+bag2+" ";
}
console.log(bag1)

//output===> 'ehT kciuq nworb xof spmuj revo eht yzal .god'

//approch 2 =================================> 

function detectPalindrome(string, bag = ' ') {
    return string
      .split('').reverse().join('')
      .split(bag).reverse().join(bag);
  }
  
    console.log(detectPalindrome ('The quick brown fox jumps over the lazy dog.'));
   //output==>//ehT kciuq nworb xof spmuj revo eht yzal .god
  