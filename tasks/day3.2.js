
function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false; 

   
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; 
}



function reverseString(str) {
    return str.split('').reverse().join('');
}





function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}


function checkPrime() {
    const num = document.getElementById('primeInput').value;
    const result = isPrime(num) ? 'The number is prime.' : 'The number is not prime.';
    document.getElementById('primeResult').innerText = result;
}

function reverseStr() {
    const str = document.getElementById('stringInput').value;
    const result = reverseString(str);
    document.getElementById('stringResult').innerText = result;
}
function removeDup() {
        const input = document.getElementById('arrayInput').value;
            
            // Split the input on commas, newlines, and spaces
            const arr = input.split(/[\s,]+/).map(item => item.trim()).filter(item => item !== "");
            const result = removeDuplicates(arr).join(', ');
            document.getElementById('arrayResult').innerText = result;
        }

        function removeDuplicates(arr) {
            return [...new Set(arr)];
        }

function sumDigits() {
    const num = parseInt(document.getElementById('numberInput').value);
    const result = sumOfDigits(num);
    document.getElementById('numberResult').innerText = result;
}
function countVowels() {

    const str = document.getElementById('inputString').value;


    const vowels = 'aeiou';
    let count = 0;


    const lowerStr = str.toLowerCase();


    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }


    document.getElementById('result').innerText = `Number of vowels: ${count}`;
}