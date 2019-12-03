// reverse a string
// ex: reverseString('hello') === 'olleh'

const reverseString = str => {
    const strArr = str.split("");
    strArr.reverse();
    return strArr.join("");
};
const forLoopReverse = str => {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
};

const isPalindrome = str => {
    let strArr = str
        .split("")
        .reverse()
        .join("");

    return strArr === str;
};

const reverseInt = int => {
    const string = int
        .toString()
        .split("")
        .reverse()
        .join("");
    return parseInt(string) * Math.sign(int);
};

const capLetters = str => {
    const strArr = str.toLowerCase().split(" ");
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] =
            strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(" ");
};

const mapCapLetters = str => {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(" ");
};

const maxChar = str => {
    const charMap = {};
    let maxNum = 0;
    let maxChar = "";
    str.split("").forEach(char => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else console.log(i);
    }
};

console.log(fizzBuzz());
