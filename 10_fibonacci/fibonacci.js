const fibonacci = function(n) {
    let count=parseInt(n);
    if (count<0) return "OOPS";
    if (count===0) return 0;
    if (count===1) return 1;
       
    let first=0;
    let second=1;
    let fib=[];

    for(let i=2;i<=count;i++){
        fib[i]=first+second;
        let temp=second;
        second=fib[i];
        first=temp;
    }
     return fib[count];

};

// Do not edit below this line
module.exports = fibonacci;
