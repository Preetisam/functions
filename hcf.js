(function(){
    function getHCF(num1,num2){
        let HCFvalue = 1
        for (let i =1; i <= num1 && i <= num2 ; ++i){
            if(num1 % i == 0 && num2 % i ==0){
                HCFvalue = i        
            }
        }
        return HCFvalue;
    }
    console.log(getHCF(8,9));
    console.log(getHCF(22,55));
    console.log(getHCF(16,8));
    console.log(getHCF(81,36));

})();

// (function() {


//     function getHCF(firstNumber, secondNumber){
//         let HCF = 1;
//         for(let i = 1; i <= firstNumber && i <=secondNumber; i++){
//             if(firstNumber % i == 0 && secondNumber % i == 0) {
//                 HCF = i;
//             }
//         }

//         return HCF;
//     }

//     console.log(getHCF(16,8));
//     console.log(getHCF(15,18));
// })()