function oddArrayTraversal(N, array) {
    var bag="";
    for(var p=0; p<array.length; p++){
        if(p%2!==0){
            bag=bag+array[p]+" ";
        }
       
    } console.log(bag);
   
}