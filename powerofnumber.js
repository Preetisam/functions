(function(){

    function power(base, power){//base=3, power =5
        let output=1;
        let counter = 0;//power 5/2
        while(power>0){
            if (power&1){//this number is odd
                output =output * base;//(1*3),(81*3)

            }
            base = base * base;//9/81
            power = power>>1;//2/1
            counter++;

        }
       console.log(cunnter)
        return output

    }
    console.log(power(3,5))
})();