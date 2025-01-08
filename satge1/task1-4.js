function showNumberIsEven(number) {
    if (typeof number !== "number") {
        console.log("не число!");
        throw new Error("ААА, дай число!");
    }
    if (number % 2 == 0) {
        console.log("четное число");
   } else {
        console.log("нечетное число");
   }
}
