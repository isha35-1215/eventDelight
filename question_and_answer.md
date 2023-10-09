1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer : B: ReferenceError: greetign is not defined.

Explanation: In the code, there's a typo in the variable name "greetign" instead of "greeting," so it's not defined, leading to a ReferenceError when trying to log it.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer : C :12

Explanation : JavaScript performs type coercion, converting the number 1 to a string and then concatenating it with the string "2", resulting in the string "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer :A: ['🍕', '🍫', '🥑', '🍔']

Explanation:
The info.favoriteFood initially references the first element of the food array, which is "🍕". However, when you later assign "🍝" to info.favoriteFood, it doesn't affect the food array. So, food remains unchanged, and the console.log(food) statement will output the original array, which is ['🍕', '🍫', '🥑', '🍔'].


4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return Hi there, ${name};
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer : B: Hi there, undefined

Explanation: The function sayHi expects an argument name, but when you call sayHi() without providing any argument, name is undefined. Therefore, the function returns "Hi there, undefined."


5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer :C: 3

Explanation: The forEach method iterates over each element in the nums array and increments the count variable whenever the current element is truthy (not equal to 0). There are three truthy elements in the array (1, 2, and 3), so the final value of count is 3.