let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);

// Remove element from the end of an Array
fruits.pop();
console.log(fruits);

// Add element to the beginning of an Array
fruits.unshift("Mango");
console.log(fruits);

// Remove the first element from the beginning of an Array
fruits.shift();
console.log(fruits);

// Search array element index number by array value
console.log(fruits.indexOf("Banana"));
console.log(fruits.includes("Apple"));

let numbersArray = [10, 20, 30, 40, 50];
let slicedArray;
slicedArray = numbersArray.slice(1, 4);
console.log(slicedArray);

let mergedArray = numbersArray.concat([60, 70]);
console.log(mergedArray);

let reversedArray = mergedArray.reverse();
console.log(reversedArray);
