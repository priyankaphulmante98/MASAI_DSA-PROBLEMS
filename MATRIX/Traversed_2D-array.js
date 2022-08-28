function traverse2dArray(N, M, matrix){
    var bag="";
    for(let col=0; col<M; col++){
     
        for(let row=N-1; row>=0; row--){
            bag+=matrix[row][col]+" ";
          
            }
           
       }console.log(bag);
      
       
  }  
    