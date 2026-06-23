// 1. OrderEvenBeforeOdd
function orderEvenBeforeOdd(arr) {
    const evens = [];
    const odds = [];

    // Pisah genap dan ganjil
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evens.push(arr[i]);
        else odds.push(arr[i]);
    }

    // Urut genap dari terkecil ke terbesar
    for (let i = 0; i < evens.length - 1; i++) {
        for (let j = 0; j < evens.length - 1 - i; j++) {
            if (evens[j] > evens[j + 1]) {
                let temp = evens[j];
                evens[j] = evens[j + 1];
                evens[j + 1] = temp;
            }
        }
    }

    // Urut ganjil dari terkecil ke terbesar 
    for (let i = 0; i < odds.length - 1; i++) {
        for (let j = 0; j < odds.length - 1 - i; j++) {
            if (odds[j] > odds[j + 1]) {
                let temp = odds[j];
                odds[j] = odds[j + 1];
                odds[j + 1] = temp;
            }
        }
    }

    // Digabungkan
    const result = [];
    for (let i = 0; i < evens.length; i++) result.push(evens[i]);
    for (let i = 0; i < odds.length; i++) result.push(odds[i]);

    return result;
}

console.log(orderEvenBeforeOdd([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10,1,3,5,7,9]
console.log(orderEvenBeforeOdd([3,4,5,2,10]));            // [2,4,10,3,5]
console.log(orderEvenBeforeOdd([2,4,6,10,1]));            // [2,4,6,10,1]

// 2. String Palindrome
function isPalindrome(arr) {
    const left = 0;
    const right = arr.length - 1;

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}

console.log(isPalindrome(["donout","king","donout"])); // true
console.log(isPalindrome(["min","max","min"]));        // true
console.log(isPalindrome(["true","false","false"]));   // false 


// 3. Add One Plus
function addOnePlus(arr) {
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i] += 1;
            return arr; 
        }
        arr[i] = 0; 
    }

    const result = [1];
    for (let i = 0; i < arr.length; i++) result.push(arr[i]);
    return result;
}

console.log(addOnePlus([1,3,2,4])); // [1,3,2,5]
console.log(addOnePlus([1,4,8,9])); // [1,4,9,0]
console.log(addOnePlus([9,9,9,9])); // [1,0,0,0,0]