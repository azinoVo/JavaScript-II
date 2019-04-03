// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

//Closure comes with nested functions.

function aMain(){
  const book = "The Bird's Nest";
  console.log('This is a book');

  aMain();

  function bMain(){
    const mainChar = 'Lam';
    console.log(`In ${book}, ${mainChar} is one of the main cast!`);

    bMain();

    function cMain() {
      const suppChar = 'Dinh';
      console.log(`${mainChar} and ${suppChar} are cousins.`);

      cMain();

    }
  }
}


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
