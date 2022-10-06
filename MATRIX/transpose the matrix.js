// function transposeTheMatrix(N, M, matrix){
//     for(let col=0; col<M; col++){
//         let bag="";
//         for(let row=0; row<N; row++){
//             bag+=matrix[row][col]+" ";
//             }
//             console.log(bag);
//         }
//     }
  

function transposeTheMatrix(N, M, matrix){

    for(let col=0; col<M; col++){
            let bag="";
        for(let row=0; row<N; row++){
            bag=bag+matrix[row][col]+" ";
        }
 console.log(bag);
    }
           
    }
  
