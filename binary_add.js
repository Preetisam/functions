(function{
    function addNumbers(num1,num2){
        let carry;
        while(b !=0){
            carry = a & b;
            a= a ^ b;
            b = carry <<1;

        }
        return a;
    }
    console.log("the sum is " + add (215,185));
})();