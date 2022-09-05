(function(){
    function bionomial(num, k){
        if(k > num) return 0;
        if(k == 0 || k == num) return 1;
        return bionomial(num - 1, k-1)+ bionomial ();

    }
})();