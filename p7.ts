//function that takes two arrays as input and returns a new array containing the elements that are common in both arrays.

function findCommonElements(array1: any[], array2: any[]){
    const commonElements : any[] = [];

    for (let i = 0; i < array1.length; i++ )
    {
        const currentElement = array1[i];
        let found :boolean = false;

        for (let j =0; j< array2.length; j++ )
        {
            if(array2[j] === currentElement)
            {
                found = true;
                break
            }
        }
        if (found === true)
        {
            commonElements.push(currentElement);
        }
    }
    return commonElements;
}
const array1 = [3,4,5,6,7,1,8,9];
const array2 = [5,6,8,25,35,45,9];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements);