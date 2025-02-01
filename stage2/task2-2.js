export function showLastCharOfNumber(num) {
    const number = Number(num);
    if (typeof number!== 'number') {
        console.log("введи число");
        throw new Error("введи число!");
    } else if (typeof number === "number") {
        let lastChar = number % 10;
        console.log(lastChar);
        return 'последняя цифра:' + lastChar;
    }
}