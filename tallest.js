function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);


// Homework: Write a function to get the lowest number in an array