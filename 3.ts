// Write a function that takes a string as input and returns the length of the longest palindromic substring

function longestPalindromicSubstring(str: string): number {
    let longest = '';

    for (let i = 0; i < str.length; i++) {
        // Check for odd-length palindromes
        let j = i - 1;
        let k = i + 1;
        while (j >= 0 && k < str.length && str[j] === str[k]) {
            const palindrome = str.substring(j, k + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
            j--;
            k++;
        }

        // Check for even-length palindromes
        j = i;
        k = i + 1;
        while (j >= 0 && k < str.length && str[j] === str[k]) {
            const palindrome = str.substring(j, k + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
            j--;
            k++;
        }
    }

    return longest.length;
}
const str = 'babad';
const longest = longestPalindromicSubstring(str);
console.log(longest); // Output: 3 (the longest palindromic substring is 'bab')