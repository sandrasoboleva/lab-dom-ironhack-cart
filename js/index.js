// ITERATION 1
function updateSubtotal(product) {

  let price = Number(product.querySelector('.price span').textContent);
  let quantity = product.querySelector('.quantity input').valueAsNumber;

let sub = price * quantity;
let subtotalEl = product.querySelector('.subtotal span');
subtotalEl.textContent = sub.toFixed(2);

return sub;
}

 // ITERATION 2
function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  const allProducts = document.querySelectorAll('.product');

  let total = 0;
  for (let i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i]);
  }
let totalEl = document.querySelector('#total-value span');
totalEl.innerText = total;
}

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
