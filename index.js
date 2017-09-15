var cart = [];
// We've started you off with a `cart` variable that points at an empty array. There are five functions that you'll have to code in order to create a working shopping cart:
// 1. The `addToCart()` function accepts one argument, the name of an item.
//     + Use that passed-in string to create a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: `{ itemName: itemPrice }`. As more items are added, the `cart` should start to look something like this: `[ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }]`.
//     + The price of each item should be a randomly-generated integer between 1 and 100.
//       * ***HINT***: Look into `Math.random()` and `Math.floor()`.
//     + If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the keys in an object literal. That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look back at the **Top Tip** in the [JavaScript Objects](https://learn.co/lessons/javascript-objects) lesson.
//     + Upon the successful addition of a new item to the cart, the function should print `<itemName> has been added to your cart.` to the console and then `return` the updated `cart`.

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const price = Math.floor(Math.random() * 100 + 1);
 cart.push({ [item]: price});

 console.log(`${item} has been added to your cart.`)

return cart;}


function viewCart() {

  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  if (cart.length === 1){
    console.log(`In your cart, you have " ${cart} + "  $${cart.hasOwnProperty()}`);

  }
  if (cart.length === 2){

  }
  if (cart.length > 2){

  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
