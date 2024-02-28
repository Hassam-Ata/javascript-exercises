const getTheTitles = function(books) {
    // let t=[];
    // for(let i=0;i<books.length;i++){
    //     t.push(books[i].title);
    // }
    // return t;
    return books.map((books)=>books.title);
};

// Do not edit below this line
module.exports = getTheTitles;
