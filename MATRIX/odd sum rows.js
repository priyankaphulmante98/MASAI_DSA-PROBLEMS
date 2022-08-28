function oddSumRows(N,M,arr){
    for(let p=0; p<N; p++){
        let sum=0; 
        for(let q=0; q<M; q++){
            if(arr[p][q]%2==1){
                sum+=arr[p][q];
            }
        }console.log(sum);
      }
    }
    