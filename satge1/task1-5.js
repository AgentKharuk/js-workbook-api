export function showEqualityFirstCharInWords(x, y, indexToCheck) {
    const firstChar = x.charAt(indexToCheck);
    const secondChar = y.charAt(indexToCheck);
    if (firstChar === secondChar) {
        console.log("совпадают");
        return 'совпадают'; 
    } else {
        console.log("не совпадают");
        return 'не совпадают';
    }
}