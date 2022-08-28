function vowelsInRows(N,M,arr){
    for(let p=0; p<N; p++){
        let flag=false;
        for(let q=0; q<M; q++){
            if(arr[p][q]=="a"||arr[p][q]=="e"||arr[p][q]=="i"||arr[p][q]=="o"||arr[p][q]=="u"){
                 flag=true;
            }
        }
        if(flag==true){
            console.log("Yes");
        }else{
            console.log("No");
        }
     }
   }
  