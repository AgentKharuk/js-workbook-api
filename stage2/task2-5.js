/**
 * 
 * @param {number} firstNum to process
 * @param {number} secondNum to process
 * @returns {void} 
 */
export function showCoincidenceOfFirstDigitsOfTwoNumbers(firstNum, secondNum) {
    if ((firstNum.toString()[0]) === (secondNum.toString()[0])) {
        console.log('Совпадают');
        return 'совпадают';
    } else {
        console.log('Не совпадают');
        return 'не совпадают'; 
    }
}
