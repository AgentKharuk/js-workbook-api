/**
 * 
 * @param {void}
 * @returns {void}
 */
function showEvenNumbersFromRange() {
    for (let index = 1; index <= 100; index += 1) {
        if (index % 2 !== 0) continue;
        console.log(index);
    }
}