function nTraversal(matrix) {
    let bag="";
    for(let p=matrix.length-1; p>=0; p--){
        bag=bag+matrix[p][0]+" ";
    }
    for(let p=1,q=1; p<matrix.length && q<matrix.length; p++,q++){
        bag=bag+matrix[p][q]+" ";
    }
    for(let p=matrix.length-2; p>=0; p--){
        bag=bag+matrix[p][matrix.length-1]+" ";
    }
    console.log(bag);
}