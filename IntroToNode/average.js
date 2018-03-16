// ------------------------------------------------------
// Average.js
// Does an average of the given numeric array.
// ------------------------------------------------------

function average(numbers) {
    var total = 0;
    
    // add all numbers together
    numbers.forEach(function (nbr) {
       total = total + nbr; 
    });
    
    // divide by the amount of numbers in the array
    total = total / numbers.length;
    
    // round to closest integer
    total = Math.round(total);
    console.log(total);
}

average([90,98,89,100,100,86,94]);