//task 4
/* Instructions to Run:
 * 1. Ensure TypeScript is installed globally by running: `npm install -g typescript`.
 * 2. make sure to add the it to system variables path and test if it's done correctly using 'tsc --version', if it gave the version
 * then it is installed correctly. 
 * 3. Compile the TypeScript file to JavaScript using the TypeScript compiler:
 *    `tsc product.ts`.
 * 4. Run the generated JavaScript file using Node.js:
 *    `node product.js`.
 */ 
//product interface
interface Product{
    name: string;
    price: number;
}
//function to calculate the price of all elements in an array of products
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}
//testcase for task 4 
const productList: Product[] = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 }
];

const total = calculateTotalPrice(productList);
console.log(`Total Price: $${total}`); // Output: Total Price: $2150

//task 5 
//function for checking email using regex code
function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email"));    // false
console.log(isValidEmail("user@domain"));      // false
console.log(isValidEmail("user@domain.org"));  // true
