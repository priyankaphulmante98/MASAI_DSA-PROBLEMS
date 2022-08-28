function oddPalindrome(N, str){
    var bag="";
    for(p=0; p<str.length; p++){
        if(p%2==1){
        bag+=str[p];
    }
    }
    // console.log(bag);
    var rev_bag="";
    for(q=bag.length-1; q>=0; q--){
        rev_bag+=bag[q];
    }

    if(bag==rev_bag){
        console.log("yes");
    }else{
        console.log("no");
}
}