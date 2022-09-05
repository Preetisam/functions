(function(){
    function fibonacci(number){
        let previous = 0,current =1, output = 0;
        console.log(previous);
        console.log(current);
        for(let i = 1; i<=5 ; i++){
            output = previous +current;
            console.log(previous);
            previous = current;
            current = output;
        }
        return current;

    }
    console.log(fibonacci(5));
    
 })();
   
//  (function() {
//     function fibonacci(number) { //4   => 2
//         // 0 1 1 2  3  5  8
//         let previous  = 0, current = 1, output = 0;
//         console.log(previous); // 0
//         console.log(current);  // 1
//         for(let i = 1 ; i <=number ; i++) { // count 5
//             output = previous + current; //5
//             console.log(output); //5
//             previous = current;  // prev = 3
//             current = output;    // curr = 5
//         }

//         return current;  //5
//     }

//     console.log(fibonacci(5));

// })();