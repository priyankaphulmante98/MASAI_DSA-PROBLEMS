 //Given a matrix print it in the form of a snake
var arr = [];

arr.push([1,2,3]);
arr.push([4,5,6]);
arr.push([7,8,9]);

var rows = arr.length; 
var cols=arr[0].length;

//even row
for(var p=0; p<rows; p++){
  var bag=[];
  if(p%2==0){
    for(var q=0; q<cols; q++){
    bag.push(arr[p][q]);
  }
  }
    //odd row
  else{
    for(var  q=cols-1; q>=0; q--){
      bag.push(arr[p][q]);
    }
    
  }
    console.log(bag);
  }
