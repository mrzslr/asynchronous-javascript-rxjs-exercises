// Implementing Javascript array's map function.

/* 
if I use Arrow Function instead of function keyword, this function won't work because then 'this' keyword
will refer to a empty object
*/
Array.prototype.map = function(projectionFunction){
    
    let results = [];
    this.forEach((itemInArray) => {
        results.push(projectionFunction(itemInArray));
    });
    return results;
}


const myResult = [1,2,3,4].map(item => item += 1);

console.log(myResult)



