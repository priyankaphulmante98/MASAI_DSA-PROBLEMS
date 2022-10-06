function nTraversal(matrix) {
    let bag=""
    for(let p=0; p<matrix.length; p++){
        bag=bag+matrix[p][0]+" ";
    }
     for(let p=matrix.length-2 , q=1; p>=0,q<matrix.length; p--, q++){
            bag=bag+matrix[p][q]+" ";
        }
     for(let p=1; p<matrix.length; p++){
         bag=bag+matrix[p][matrix.length-1]+" ";
    }
    console.log(bag);
     
   }