10:30
(function(){
    function checkArmstrong(){
       let numbers =[121, 151, 307, 371, 407, 129];
       let sum = numbers;
            for (var counter = 0; counter < numbers.length; counter ++) {
                 console.log(numbers[counter]);
                if (numbers >= 0 , reminder = numbers % 10, sum += reminder * reminder * reminder, numbers = parseInt(numbers / 10)){
                    console.log("its a Armstrong number")
                } else {
                    console.log("Not a Armstrong")
                }
            }
    }
    console.log(checkArmstrong(121));
    console.log(checkArmstrong(151));
    console.log(checkArmstrong(307));
    console.log(checkArmstrong(371));
    console.log(checkArmstrong(402));
    console.log(checkArmstrong(129));
})();1