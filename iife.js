// Print odd numbers in an array

(function (){
    let arr1 = [1,2,3,4,5,6,7,8,9];

    let oddNumber = arr1.filter(function(res1){
        return res1 %2 !==0;

});
console.log("These are Odd Numbers:", oddNumber );

})();

// Convert all the strings to title caps in a string array

let arr = ["i am a mom of 3 kids"];

let result = (function (res) {
    return res[0].split(' ').map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(' ');
})(arr);

console.log("Title caps in a string array is : ", result);

// Sum of all numbers in an array

let a = [1,2,3,4,5,6,7,8,9];

let b = 0;

let res = (function (arr, intialsum) {
    let sum = intialsum;

    for(let i = 0; i<arr.length; i++){
         sum += arr[i];
    }
    return sum;
})(a,b);
console.log("Sum of all numbers in an array is : ", res);


// Return all the prime numbers in an array

let num = [1, 3, 2, 5, 10, 4, 7];

let primeNum = num.filter(function(num1) {
    for(let i = 2; i<num1; i++){
        if (num1 % i === 0) {
            return false;
        }
        return num1!==1;
    }

});

console.log("The prime Numbers are: ", primeNum);


// Return all palindromes in an array

let arr1 = ["xyz", "madam", "racecar","destiny","reviver"];
let arr2 = arr1.length;

function isPalindrome(a) {
    let b = a;

    a = a.split("").reverse().join("");

    return a == b;
}

function palindromeArray(arr1, arr2){
    let res = [];

    for(let i = 0; i<arr2; i++){
        if(isPalindrome(arr1[i])){
            res.push(arr1[i]);
        }
    }

    return res;
}

let x = palindromeArray(arr1, arr2)

if(x.length === 0){
    console.log("-1");
}
for (const str of x) {
    console.log(str, " ");
}

// Return median of two sorted arrays of the same size.

let a1 = [1,4,7,3,6,9];
let a2 = [2,1,6,9,5,2,7];

function median(a1,a2){
    let mergedmedian = a1.concat(a2).sort(function(x,y){
        return x - y;
    });

    let length = mergedmedian.length;
    let res = Math.floor(length/2);

    if (length % 2 == 0) {
        return (mergedmedian[res - 1] + mergedmedian[res])/2;
    }else{
        return mergedmedian[res];
    }
};

let mainres = median(a1,a2);
console.log("The median of sorted arrays: ", mainres);


// Remove duplicates from an array

let x1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

function removeDuplicates(arrayset){
    let set1 = new Set(arrayset);

    let as1 = [...set1];

    return as1;

}

let result2 = removeDuplicates(x1);

console.log("Orginal Array: ", x1);
console.log("After removing duplicate: ", result2);

// Rotate an array by k times

let mainarray = [1,2,3,4,5,6,7];
let k = 2;

function rotate(p, k){
    let i = p.length;

    k = k % i;

    let afterrotate = p.slice(i-k).concat(p.slice(0,i-k));

    return afterrotate;
};

let afterrotate = rotate(mainarray, k);

console.log("Before Rotate: ", mainarray);
console.log("After Rotate: ", afterrotate);
