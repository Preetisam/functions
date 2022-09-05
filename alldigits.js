(function(){

    function getSumofDigits(number){
        let sum =0;
        while(number >= 1){
            sum = sum + (number %10);
            number = parseInt(number / 10);
        }
        return sum;
    }
    console.log(getSumofDigits(143))
    console.log(getSumofDigits(2189))
    console.log(getSumofDigits(403))
    console.log(getSumofDigits(1111))

 

})();
