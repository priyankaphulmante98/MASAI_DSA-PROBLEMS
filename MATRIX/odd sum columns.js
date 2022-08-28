function oddSumColumns(N,M,arr){
    for(p=0; p<M; p++){
        let sum=0; 
        for(q=0; q<N; q++){
            if(arr[q][p]%2==1){
            sum+=arr[q][p];
        }
     }
     console.log(sum);
        
   }
 
 }
