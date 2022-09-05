(function(){
    function checkNumber(num){
        switch (true) {
            case num > 0:
                console.log('POSITIVE NUMBER')
                break;
            case num < 0:
                console.log('NEGATIVE NUMBER')
                break;
            default:
                console.log('ZERO')
                break;
        }
    }
    console.log(checkNumber(-12));
    console.log(checkNumber(-44));
    console.log(checkNumber(0));
    console.log(checkNumber(78));
    console.log(checkNumber(58));
})();