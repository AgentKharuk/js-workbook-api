export function showFirstCharOfNumber(num) {
    const str = String(num)
    if (typeof num === "number") {
        console.log("введи число в кавычках");
        // throw new Error("введи число в кавычках!");
        return 'введи число!';
    } else if ( typeof num !== "number") {
        console.log(str[0]);
        return 'первая цифра числа:'+ str[0];
    }
}
