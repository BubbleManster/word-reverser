var word="anything";
var increment = 0;

const len = word.length;
word=word.split("");

for(let i = 0; i < len; i++) {
    word.unshift(word[i+increment]);
    increment++;
}

word.splice(word.length/2, word.length/2);
console.log(word)