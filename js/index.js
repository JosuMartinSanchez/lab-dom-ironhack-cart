// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let prices = price.innerHTML;
  let quantity = product.querySelector('.quantity input');
  let quantitys = quantity.value;
  let total = prices * quantitys;

  let subtotalDOM = product.querySelector('.subtotal span');
  subtotalDOM.innerHTML = total;

  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  let products = document.querySelectorAll('.product');
  let totalCounter = document.querySelector('#total-value span');
  let allValues = 0;
  products.forEach((eachElement) => {
    let allValue = updateSubtotal(eachElement);
    allValues = allValue + allValues;
  });

  return (totalCounter.innerHTML = allValues);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  target.parentNode.parentNode.parentNode.remove();

  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let delbtn = document.querySelectorAll('.btn-remove');
  delbtn.forEach((eachBtn) => {
    eachBtn.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
