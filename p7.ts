//function that takes two arrays as input and returns a new array containing the elements that are common in both arrays.

function findCommonElements(array1: any[], array2: any[]): any[] {
    const commonElements: any[] = [];
    for (const element of array1) {
        if (array2.includes(element)) {
            commonElements.push(element);
        }
    }
    return commonElements;
}

const array1 = [3,4,5,6,7,1,8,9];
const array2 = [5,6,8,25,35,45,9];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements);

//output[5,6,8,9]