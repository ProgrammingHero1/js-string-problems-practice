const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}


// ----------------
//  
// ------------------
const number = 2.451245;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(2.00001);
const result3 = Math.floor(456.259);
// console.log(result3); 


// ------------------
//  Random

// console.log(Math.random());
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}