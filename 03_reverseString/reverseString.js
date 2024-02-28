const reverseString = function(word) {
   let rstring="";
    for (let i=word.length-1;i>=0;i--){
        rstring=rstring+word[i];
    }
   return rstring;
};

// Do not edit below this line
module.exports = reverseString;
