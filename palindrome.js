/**
 *Instead of reversing a string, why don't we reverse
 *An integer instead while discarding negative conditions as they would
 *Always return false during palindrome comparison
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function reverseInteger(n) {
    let reversed = 0;

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10); 
    }

    return reversed > Math.pow(2, 31) - 1 ? 0 : reversed;
}


var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
   let v = reverseInteger(x);

   let z = v.toString();

   return z === x.toString();
};
