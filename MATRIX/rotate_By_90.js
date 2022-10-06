// function rotateBy90(R, matrix){
//     for(let col=R-1; col>=0; col--){
//         let bag="";
//         for(let row=0; row<R; row++){
//             bag+=matrix[row][col]+" ";
//         }
//         console.log(bag);
//     }
// }

function rotateBy90(R, matrix){
    for(let col=R-1; col>=0; col--){
        let bag="";
        for(let row=0; row<R; row++){
            bag=bag+matrix[row][col]+" ";
        }
        console.log(bag);
    }
    
   
 }
 