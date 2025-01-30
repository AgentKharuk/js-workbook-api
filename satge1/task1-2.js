export function showLength(str) {
    if (!str) {
        throw new Error("'str' должна быть определена");
    } else if (typeof str !== 'string') {
        throw new Error("'str'должна быть строкой");
    }  else {
        console.log(str.length);
        return str.length;
    }
}
        
        
    


// if (typeof str !== 'string') {
//     console.log("не строка!");
//     throw new Error("введи строку!");
// } else {
//     console.log(str.length);
// }
// }