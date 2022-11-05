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

// map in another style(higher order function)

function copyArrayAndManipulate(array, instruction){
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instruction(array[i]));
    }
    return output;
}

const mapResult = [1,2,3].map(item => item += 1);

const copiedArrayResult = copyArrayAndManipulate([1,2,3], function(number) {
    number = number + 1;
    return number;
});

// results
console.log("map override result: ", mapResult);
console.log("copiedArray result: ", copiedArrayResult);



