(function(){
    function getInnerdigitsum(){
    sum=0
    num = num/10;
    sum=sum=(num%10)
    
        while (parseInt(num/100)!=0) {
            num=num/10
            sum=sum+(num%10)
          
        }
    }
})();
    
