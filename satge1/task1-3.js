export function showLastSymbol(str) {
    if (!str) {
        throw new Error("'str' должна быть определена");
    } else if (typeof str !== 'string') {
        throw new Error("'str'должна быть строкой");
    }  else {
        console.log(str.charAt(str.length -1));
        return str.charAt(str.length -1);
    }
}