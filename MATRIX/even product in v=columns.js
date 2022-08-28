function evenProductInColumns(N,M, arr){
    for(let row=0; row<M; row++){
       let sum=1;
          for(let col=0; col<N; col++){
           if(arr[col][row]%2==0){
               sum=sum*arr[col][row];
           }
          }
          console.log(sum)
      }
   }
     