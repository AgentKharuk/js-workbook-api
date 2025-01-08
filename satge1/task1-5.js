function showEqualityFirstCharInWords(x, y, indexToCheck) {
    // const INDEX_OF_CHAR_TO_CHECK = 0;
    const firstChar = x.charAt(indexToCheck);
    const secondChar = y.charAt(indexToCheck);
    if (firstChar === secondChar) {
        console.log("совпадают"); 
    } else {
        console.log("не совпадают");
    }
}