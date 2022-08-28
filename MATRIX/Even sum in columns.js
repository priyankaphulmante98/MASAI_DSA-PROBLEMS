function evenSumColumns(N,M,arr){
    for(let p=0; p<M; p++){
        let sum=0; 
        for(let q=0; q<N; q++){
            if(arr[q][p]%2==0){
            sum+=arr[q][p];
        }
        }
        console.log(sum);
     }
 }
 