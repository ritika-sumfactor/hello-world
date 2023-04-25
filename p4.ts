//function that takes two numbers as input and returns the product of those two numbers without using the multiplication operator (*)

function countCharacters(str: string): { [key: string]: number } {

    const counts: { [key: string]: number } = {};

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (counts[char]) {
            counts[char]++;

        } else {

            counts[char] = 1;

        }

    }

    return counts;

}
