(function () {

    function largest(a, b, c) {
        if (a > b && a > c) {
            return a;
        } else if (b > a && b > c) {
            return b; 
        }else{
            return c;
        }
    }
    
    console.log ("largest(4, 78, 9)") + ("largest(4, 78, 67)");
    console.log ("largest(4, 78, 9)" ) + ("largest(2, 32, 54)");
    console.log ("largest(4, 78, 9)" ) + ("largest(3, 46, 56)");
    console.log ("largest(4, 78, 9)" ) + ("largest(45,56, 34)");
})(); 