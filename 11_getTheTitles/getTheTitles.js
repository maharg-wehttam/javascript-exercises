const getTheTitles = function(books) {
    let titles = [];
    for (let book in books) {
        titles.push(books[book].title)
    }
    return titles;
}; 

// Do not edit below this line
module.exports = getTheTitles;
