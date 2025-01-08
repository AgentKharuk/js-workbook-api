/**
 * 
 * @param {void}
 * @returns {void}
 */
function showNumbersMultiplesThreeFromRange() {
    for (let index = 1; index <= 100; index += 1) {
        if (index % 3 !== 0) continue;
        console.log(index);
    }
}