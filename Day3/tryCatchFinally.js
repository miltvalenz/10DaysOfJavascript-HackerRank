/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let newArr = s.split("");
        let arrReverse = newArr.reverse();
        let newString = arrReverse.join("");
        return console.log(newString);
    } catch(err) {
        console.log('s.split is not a function');
        console.log(s);
    }
}