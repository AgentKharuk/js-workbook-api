function showFirstCharOfNumber(x) {
    const str = String(x)
    if (typeof x === "number") {
        console.log("введи число в кавычках");
        throw new Error("введи число!");
    } else if ( typeof x !== "number") {
        console.log(str[0]);
    }
}
