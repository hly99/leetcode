var trailingZeroes = function(n) {
    let abc = 0;
        while(n >= 5) {
            abc += parseInt(n / 5);
            n = parseInt(n / 5);
        }
        return abc;
};
console.log(trailingZeroes(7))