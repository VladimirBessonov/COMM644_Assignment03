//STEP 1 - v.1
function halfNumber() {
    let value = Number(window.prompt("Enter any number"));
    window.document.write('STEP 1'+ '\n')
    window.document.write("Half of " + value + " is " + value/2 + "." + '\n');
}
halfNumber();

//STEP 1 - v.2
// function halfNumber(value) {
//     window.document.write("Half of " + value + " is " + value/2 + ".");
// }
// halfNumber(7);

// STEP 2 - v.1
function squarefNumber() {
    let value = Number(window.prompt("Enter any number"));
    window.document.write('STEP 2'+ '\n')
    window.document.write("The result of squaring the number " + value + " is " + Math.pow(value, 2) + "." + '\n');
}
 squarefNumber();

//STEP 2 - v.2
// function squarefNumber(value) {
//     window.document.write("The result of squaring the number " + value + " is " + Math.pow(value, 2) + ".");
// }
//  squarefNumber(7);

//STEP 3 - v.1
function percentOf() {
    let num1 = Number(window.prompt("Enter the first number"));
    let num2 = Number(window.prompt("Enter the second number"));
    window.document.write('STEP 3'+ '\n')
    window.document.write(num1 + " is " + Math.round(num1/num2*100) + "% of " + num2 + "." + '\n');
}
percentOf();

//STEP 3 - v.2
// function percentOf(num1, num2)
// {
//   window.document.write(num1 + " is " + num1/num2*100 + "% of " + num2 + ".");
// }
// percentOf(2, 10);   

// STEP 4 - v.1
function findModulus() {
    let num1 = Number(window.prompt("Enter the first number"));
    let num2 = Number(window.prompt("Enter the second number"));
    window.document.write('STEP 4'+ '\n')
    window.document.write(num2 % num1 + " is the modulus of " + num1 + " and " + num2 + ".");
}
findModulus();

// //STEP 4 - v.2
// function findModulus(num1, num2) {
//     window.document.write(num2 % num1 + " is the modulus of " + num1 + " and " + num2 + ".");
//     }
//     findModulus(4, 10);

//STEP 5
function findSum(num1, num2, num3) {
    num1 = Number(window.prompt("Enter the first number"));
    num2 = Number(window.prompt("Enter the second number"));
    num3 = Number(window.prompt("Enter the third number"));
    let sum = num1 + num2 + num3;
    window.document.write('STEP 5'+ '\n')
    window.document.write("The sum of all of the arguments is " + sum + ".");
}
findSum();