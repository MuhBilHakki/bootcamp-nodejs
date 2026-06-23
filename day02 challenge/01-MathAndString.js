// 1. isPalindrome 
/*
    121 => True
    2147447412 => True
    110 => False
*/  
function isPalindrome(n){
    let reversed = 0;
    let original = n;

    if(n<0){
        return false;
    }

    while(n>0){
        let digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n/10); // Fungsi math.floor untuk menggenapkan hasil bagi misal 2.4 jd 2 
    }
    return original === reversed;
}
console.log(isPalindrome(121))
console.log(isPalindrome(2147447412))
console.log(isPalindrome(110))

// 2. Capitalize
/*
    "this is a very special title" => "This Is A Very Special Title"
    "effective java is great" => "Effective Java Is Great"
*/
function capitalize(sentence) {
    if (!sentence) return sentence;
    
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join(' ');
}
console.log(capitalize("this is a very special title")); // "This Is A Very Special Title"
console.log(capitalize("effective java is great"));       // "Effective Java Is Great"

// 3. isNoDuplicateChar
// "codeid" => false, "abcde" => true, "jdbc" => true

function isNoDuplicateChar(char) {
    for (let i = 0; i < char.length; i++) {
        for (let j = i + 1; j < char.length; j++) {
            if (char[i] === char[j]) return false;
        }
    }
    return true;
}

console.log(isNoDuplicateChar("codeid")); // false
console.log(isNoDuplicateChar("abcde"));  // true
console.log(isNoDuplicateChar("jdbc"));   // true

// 4. isBrace
// "(())" => true, "()()" => true, "((()" => false

function isBrace(sign) {
    let count = 0;
    for (let i = 0; i < sign.length; i++) {
        if (sign[i] === '(') count++;
        else if (sign[i] === ')') {
            count--;
            if (count < 0) return false;
        }
    }
    return count === 0;
}

console.log(isBrace("(())")); // true
console.log(isBrace("()"));   // true
console.log(isBrace("(()"));  // false
