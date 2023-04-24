//function that takes an array of strings as input and returns the longest string in the array.

function findLongestString(strArr: string[]): string{

    let longestString = "";

    for (let i = 0; i< strArr.length; i++){

        if (strArr[i].length > longestString.length){

            longestString = strArr[i];

        }

    }

    return longestString;

}

const strArr = ['software', 'developer', 'engineering']
const longestString = findLongestString(strArr);
console.log(longestString);