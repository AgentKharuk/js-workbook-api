/**
 * 
 * @param {string} string to process
 * @returns {void} 
 */
function showPenultimateCharOfSring(string) {
   const str = string.toString();
if (str.length >= 2) {
   console.log(str.at(-2));
} else if (str.length < 2) {
   console.log('длина строки меньше 2 символов');// необязательный if, в задаче нет такого требования
}
}