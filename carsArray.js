// Step 1: Define the array with car names
let cars = ['toyota', 'honda', 'mazda', 'mitsubishi', 'tesla', 'lexus'];

// Step 2: Log the first and last items to the console
console.log('First item:', cars[0]);
console.log('Last item:', cars[cars.length - 1]);

// Step 3: Add 'mercedes-benz' to the array and log the updated array
cars.push('mercedes-benz');
console.log('Updated array:', cars);

// Step 4: Loop through all items in the array and log them
console.log('All items in the array:');
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
