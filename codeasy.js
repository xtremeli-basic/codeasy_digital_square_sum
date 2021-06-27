//Declaring and initializing Variables
var century = 2000
var year;
var sumOfYears = 0;
var i;

//Looping through the years in the 21st century
for (i=1; i<=100; i++){
    year = century + i;
    var string = String(year);

//Splitting the years into individual numbers
    var split = string.split("");

//Adding the number in each year
    var sum = Number(split[0]) + Number(split[1]) + Number(split[2]) + Number(split[3]);

//Filtering the year whose sum are a square number
    var squareRoot = Math.sqrt(sum);
    // var integer = Number.isInteger(squareRoot);
    if(Number.isInteger(squareRoot)){
        sumOfYears += year;
    }
}
//logging the result
console.log(sumOfYears);
