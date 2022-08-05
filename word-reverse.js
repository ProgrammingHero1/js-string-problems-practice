function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length - 1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString = 'I am a good boy';
reverseWords(myString);