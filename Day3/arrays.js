/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largestNum = 0;
    let newArr = nums.sort((a, b) => b - a);

    for(let i = 0; i < newArr.length; i ++){
        if(newArr[0] > newArr[i]){
            return newArr[i];
        }
    }
}