export function showNumberIsEven(number) {
    if (typeof number !== "number") {
        console.log("не число!");
        return 'нужно число писать!';
        // throw new Error("ААА, дай число!");
    }
    if (number % 2 == 0) {
        console.log("четное число");
        return "четное число";
   } else {
        console.log("нечетное число");
        return "нечетное число";
   }
}
