const repeatString = function(word,times) {
    if (times<0)return "ERROR";
    let newst="";
    for (let i = 0; i <times; i++) {
        newst=newst+word;
        
    }
     return newst;
};

// Do not edit below this line
module.exports = repeatString;
