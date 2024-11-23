//Task 2
//java script function to calculate the sum and average of an array
function calculateSum(nums){
    //first check if the array is array of numbers and if it has elements
    if(!Array.isArray(nums) || nums.length ==0){
        return {sum:0, avg:0};
    }
    //if it doesn't then use the reduce method to calculate the sum by iterating on each element in the array and add it to the sum
    const initialVaule =0;
    const sum = nums.reduce(
        (acccumelator , currentValue) => acccumelator+ currentValue, initialVaule,
    );
    //calculate the average 
    const avg = sum / nums.length;

    return{sum, avg}
}
//testcase for task 2 
const nums = [1,2,3,4,5]
const result = calculateSum(nums);
console.log(`Sum: ${result.sum},Average: ${result.avg}`)


//Task 3
//a function to remove the duplicates from an array of strings
function removeDuplicates(strings) {
    // Use a set to automatically filter out duplicates
    const uniqueSet = new Set(strings);

    // Convert the Set back to an array
    return Array.from(uniqueSet);
}

//testcase for task 3
const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings = removeDuplicates(strings);

console.log(uniqueStrings); // Output: ["apple", "banana", "orange", "grape"]
