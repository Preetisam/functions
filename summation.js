(function() {
    function getsummation(a,b) {
      let greater = a>b? a:b;
      let smallest = a<b?b:a;
      while(smallest <=0){
        greater++;
        smallest--;
      }
       return greater; 
        
    }
    console.log(addNumber(10,20))
    console.log(addNumber(20,10))
    console.log(addNumber(99,11))
})();

