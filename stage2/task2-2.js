function showLastCharOfNumber(x) {
    if (typeof x !== 'number') {
        console.log("введи число");
        throw new Error("введи число!");
    } else if (typeof x === "number") {
        let lastChar = x % 10;
        console.log(lastChar);
    }
}