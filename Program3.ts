//Write a function that takes an array of numbers as input and returns the second largest number in the array
function findsecondLargest(arr : number[]) : number{
    let x = -1;
    let y = 0;
    for(let i=1;i<arr.length ; i++){
        if(arr[i]>arr[y]){
           x=y;
            y = i;
        }
        else if(arr[i]!=arr[y]){
            if(x == -1 || arr[i]>arr[x])
            {
                x=i;
            }
        }
    }
    return arr[x];
}

console.log(findsecondLargest([1,2,3,4,5,6,7,8,9,0]))
