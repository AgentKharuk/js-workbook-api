/**
 * 
 * @param {number} firstNum to process
 * @param {number} secondNum to process
 * @returns {void} 
 */
function showCoincidenceOfFirstDigitsOfTwoNumbers(firstNum, secondNum) {
    if ((firstNum.toString()[0]) === (secondNum.toString()[0])) {
        console.log('Совпадают');
    } else {
        console.log('Не совпадают'); 
    }
}
