function showNumberIsPositive (number) {
    if (typeof number !== "number" ) {
        console.log("не число!");
        throw new Error("ААА, дай число!");
    }
    if (number >= 0) {
        console.log("число положительное");
    } else {
        console.log("число отрицательное");
    }
}

