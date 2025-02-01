export function showSumOfFirstAndLastCharOfNumber(num) {
   let numAsString = num.toString(); 
   console.log(Number(numAsString[0])+ Number(numAsString[numAsString.length - 1]));
   return 'сумма первой и последней цифры числа =' + (Number(numAsString[0])+ Number(numAsString[numAsString.length - 1]));
}

