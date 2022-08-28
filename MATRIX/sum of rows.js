function sumOfRows(N,M,arr){
    for(let p=0; p<N; p++){
        let sum=0;
        for(let q=0; q<M; q++){
            sum+=arr[p][q];
        }
        console.log(sum);
    }
  }
