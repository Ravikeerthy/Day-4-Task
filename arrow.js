// Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9]

let arr1 = arr.filter(num => num % 2 !==0)

arr1.forEach(arr1 => console.log(arr1));

// Convert all the strings to title caps in a string array

let arr2 = ["i am a full stack developer "];

let new1 = arr2[0].split(' ');

let firstCaps = new1.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
   
console.log(firstCaps);

// Sum of all numbers in an array

let a1 = [1,2,3,4,5,6,7,8,9];

let b = 0;

let res = a1.reduce((a,ele) => a + ele , 0)

console.log("Sum of all number in array:", res);

// Return all the prime numbers in an array

let num1 = [1,2,3,4,5,6,7,8,9];

function isprime(num){
    if(num<=1){
        return false;
    }

    for(let i = 2; i<num; i++){
        if (num % i === 0) {
            return false;
        }
        
    }
    return true;
}

let res1 = num1.filter(num1 =>isprime(num1));
console.log("The prime Number are: ", res1);

// Return all the palindromes in an array

let x1 = ["xyz", "madam", "racecar","destiny","reviver"];
let x2 = x1.length;

function palindrome(str){
    let reverse = str.split('').reverse().join('');
    return str === reverse;
}

let palindromeRes = x1.filter(x1 => palindrome(x1));

console.log( "The palindromes are: ", palindromeRes);



