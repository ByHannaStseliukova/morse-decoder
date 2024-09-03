const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
const space = "**********";
const dot = "10";
const dash = "11";
const fromNumberToArray = expr.split(space);
const decodeArray = fromNumberToArray.map((item) => {
let array = [];
for (let i = 0; i < item.length; i += 10) {
const decode = item
        .slice(i, i + 10)
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "");
arrDecode.push(MORSE_TABLE[decode]);
}
return decodeArray.join("");
});
return fromNumberToArray.join(" ");
}
module.exports = {
    decode
}
