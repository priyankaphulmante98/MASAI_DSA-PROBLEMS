// function traverse2dArray(N, M, matrix){
//     var bag="";
//     for(let col=0; col<M; col++){
     
//         for(let row=N-1; row>=0; row--){
//             bag+=matrix[row][col]+" ";
          
//             }
           
//        }console.log(bag);
      
       
//   }  
    
function traverse2dArray(N, M, matrix){
    let bag="";
    for(row=0; row<M; row++){
        for(let col=N-1; col>=0; col--){
            bag=bag+matrix[col][row]+" ";
        }
    }console.log(bag);
      
       
  }  