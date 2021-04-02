// # Programming Basics: Arithmetic Operators(Math Problems)

// These tasks are aimed at making you more comfortable with solving math problems using JS. ** Print each of your results to the console.**

// ** Basic Arithmetic Problems **

// Q1.In one night, a movie theater sells tickets for 6450 dollars.Each ticket costs 15 dollars.How many tickets were sold ?
console.log(6450 / 15);



// Q2.Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
console.log(500 * 52);

// ** Percentage **

// Q3.Calculate the percentage of 17 / 30. Expected output: number %
const x = "30";
const y = "17";
const result = (y * 100) / 30;
console.log("q3", result);

// ** Geometry Formulas **

// Q4.Calculate the perimeter of a square.Assume each side is 4.75cm.
const sides = 4.75;
const sideresults = sides * 4;
console.log(`result is ${sideresults}cm`)

// Q5.Calculate the perimeter of a triangle.Assume the length of the sides are 5cm, 6cm, 7cm.
const triangle = 5 + 6 + 7;
console.log(`the result of triangle is =${triangle}`)


// Q6.Calculate the area of a square.Each side is 5cm.
const square = 5 * 4;
console.log(`this is answer no 6= ${square}`);

// Q7.Calculate the area of a triangle.Assume the length of the sides are 5cm, 6cm, 7cm.
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - triSideLength1) * (halfPerimeter - triSideLength2) * (halfPerimeter - triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);

// Q8.Calculate the volume of a cube.Length of each side is 9cm.
const cubeside = 9;
const cuberesult = cubeside * 3;
console.log(`the result of cube side is  = ${cuberesult}`);


// ** Consumer Formula **

// Q9.Calculate the three bills including tips:
// €22.35 + 10 % tip
// €26.67 + 15 % tip
// €35.92 + 20 % tip

console.log(22.35 * 1.10);
console.log(26.67 * 1.15);
console.log(35.92 * 1.20);

    // ** Average **

    // Q10.The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
    // What is Noemy's average hours worked per day?



//  Q11.A math student scored 75, 70, 85, 90, 100 on the first five tests he took.After he took his sixth math test, the average is now 85. What did he score on the sixth test ?
    // Expected output: Score in the sixth test: --.

// Q12.For James to get a 1st class degree, he needs to get an average of 80 % in all 9 of his assessments.He has taken 8 assessments and his average is 78 %.What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//  Expected output: James needs a minimum of-- % to get an 80 % average.
