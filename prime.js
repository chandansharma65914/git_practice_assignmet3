   let count=0;
   for(let i=1;i<n;i++){
    if(n%i==0){
        count++;
    }
   }
   if(count==2){                            //put 2 at the place of 10
    console.log("Prime")
   }else{
    console.log("Not Prime")
   }