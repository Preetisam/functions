(function(num1,num2){
    for(i=num1; i<=num2; i++){
      var n=i;
      var rev=0;
       while(n>0){
        var rem = n % 10;
         n=parseInt(n/10);
        rev = rev*10+rem;
        }
      if(i==rev){
         console.log("output " + i);
        }
    }
})(0,50);