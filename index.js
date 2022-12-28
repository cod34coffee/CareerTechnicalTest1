const word = "medium-one";
//set rule_char_set to "e"//
const rule_char_set = "e";
//turn the value of word into an array//

const wordArray = word.split("");
wordArray.splice(1, 1, 'E');
const noCommas = wordArray.join('');

wordArray.splice(9, 1, 'E');
const noCommas2 = wordArray.join('');

wordArray.splice(1,1,'e');
const noCommas3 = wordArray.join('');

wordArray.splice(9,1,'e');
const noCommas4 = wordArray.join('');

console.log(noCommas,noCommas2,noCommas3, noCommas4);