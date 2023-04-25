//Write a function to reverse a string.

function reverseString(str: string): string {

    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {

        reversedString += str[i];

    }

    return reversedString;
}

const originalString = 'Ritika, Srivastava!';
const reversedString = 'reversedString'(originalString);
console.log(reversedString);


// Output: !avatsavirS ,akitiR
