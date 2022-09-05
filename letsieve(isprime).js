(function(){
    let Sieve =(n, isPrime)=>
    {
        //initialise all entries of boolen array as true.
        isPrime[0]= isPrime[i]= false;

        for (let i= 2;i<n;i++)
        {
            isPrime[i]= true;

        } 
        for(let p=2; p*p<=n;p++)
        {
            if(isPrime[p] == true)
            {
                //update all the mulitplies of P
                for(let i=p*p;i<n;i++)
                {
                    isPrime[i]=false;
                }
            }
        }
        return false;
    }
    let FindPrimePair =(n)=>
    {
        //generate all prime using sieve algo
        let isPrime = new Array(n+1);

        for(let i=0;i<n;i++);
        {
            isPrime[i] = false;
           
        }

        Sieve(n, isPrime);

        //traversing all numbers to find first pair
        for(let i=0;i<n;i++)
        {
            if(isPrime[i] && isPrime[n-i])

            console.log(i+ "" + (n-i))

            return;
        }
    }
    FindPrimePair(5)
})();