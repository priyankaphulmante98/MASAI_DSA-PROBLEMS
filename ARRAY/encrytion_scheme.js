function encryptionScheme(N,array){
    let sum=0;
    for(let p=0; p<N;p++){
        if(array[p]==1){
            sum=sum+(p+1);
        }
    }console.log(sum);
}