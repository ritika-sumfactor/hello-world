//Write a function that takes a string as input and returns true if the string is a valid palindrome after removing exactly one character, and false otherwise
function Palindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            const strWithoutLeft = str.substring(0, left) + str.substring(left + 1);
            if (isPalindrome(strWithoutLeft)) {
                return true;
            }
            const strWithoutRight = str.substring(0, right) + str.substring(right + 1);
            if (isPalindrome(strWithoutRight)) {
                return true;
            }
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("kanak")); // true (it is a palindrome)
console.log(isPalindrome("xzwx")); // true (z can be removed to make a palindrome xwx)
console.log(isPalindrome("xzwbmx")); // false (more than one character is needed to make a palindrome)


function isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
}
