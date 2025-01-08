/**
 * 
 * @param {number} firstNumber to process
 * @param {number} secondNumber to process
 * @returns {void}
 */
function showIfNumbersDivisibleWithoutRemainder(firstNumber, secondNumber) {
    if ((!firstNumber && !secondNumber) || !firstNumber || !secondNumber ) {
        throw new Error('"firstNumber" и "secondNumber" должны быть определены');
    } else if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number')  {
        console.log('введи числа!');
        throw new Error("числа вводи!");
    } else if (firstNumber % secondNumber === 0) {
        console.log('первое число делится на второе без остатка');
    } else {
        console.log('не делится первое число на второе без остатка');
    }
}