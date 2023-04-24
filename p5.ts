//Write a function that takes a string as input and returns the count of each character in the string
function reverseString(str: string): string {

    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {

        reversedString += str[i];

    }

    return reversedString;

}

const thisString = "Ritika";
const charCounts = countCharacters(thisString);
console.log(charCounts);
