// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = quantity * price;
  let subtotalEl = product.querySelector(".subtotal span");
  subtotalEl.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  let products = document.querySelectorAll(".product");
  // console.log(products)
  let sum = 0;
  for (i=0; i<products.length; i++){
    // updateSubtotal(products[i])
    sum += updateSubtotal(products[i]);
  }
  let total = document.querySelector("#total-value span");
  total.innerHTML = sum;
  // ITERATION 3
 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Created!");
  let newItem = document.querySelector("#newProduct");
  let newQuantity = document.querySelector("#newQuantity");
  console.log(newItem.value, newQuantity.value);
  let tr = document.createElement("tr");
  tr.className = "product"
  tr.innerHTML = `<tr class="product">
  <td class="name">
    <span> ${newItem.value} </span>
  </td>
  <td class="price">$<span>${newQuantity.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
let tbody = document.querySelector("tbody");
tbody.appendChild(tr);
newItem.value = "";
newQuantity.value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


});
  let buttons = document.querySelectorAll(".btn-remove");
  console.log(buttons);
  for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", removeProduct);
  }

  let createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
 