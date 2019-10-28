// ITERATION 1

const $calculateTrigger = document.getElementById("calculate");

function updateSubtotal($product) {

  const $price = Number($product.querySelector(".price span").innerText);
  const $quantity = $product.querySelector(".quantity input").valueAsNumber;
  const $subtotal = $product.querySelector(".subtotal span");

  return $subtotal.innerHTML = $price * $quantity;
}


function calculateAll() {
  const $cart = document.querySelectorAll('#cart tr.product'); //tr.product selects tr with product class, if it was tr .product would search for a class product inside the tr
  let $total = 0;
  for (let $product of $cart) {
    $total += updateSubtotal($product);
  }
  document.getElementById('total-value').querySelector('span').innerText = $total;
}

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4
const $allRemoveButtons = document.getElementsByClassName("btn btn-remove");

function addProductRemoveListener() {
  const firstChild = event.currentTarget.parentNode.parentNode.parentNode.firstChild;
  const parent = event.currentTarget.parentNode.parentNode.parentNode;
  return parent.removeChild(firstChild);
}

for (let buttons of $allRemoveButtons) {
  buttons.addEventListener('click', addProductRemoveListener);
}

// ITERATION 5

const $createButton = document.getElementById("create")
const $nameInput = document.querySelector('tfoot .create-product .new_name input');
const $priceInput = document.querySelector('tfoot .create-product .new_price input');

function createProduct() {
  const name = $nameInput.value;
  const price = $priceInput.valueAsNumber;
  let list = document.querySelector("tbody");
  list.innerHTML += `<tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
};

$createButton.addEventListener('click', createProduct);
//Still to correct: after adding one list I can't remove any others.


/*Solutions from class:
ITERATION 1
function updateSubtotal ($productNode) {

const $priceNode = $productNode.querySelector('.price span');
const $quantityNode = $productNode.querySelector('.quantity input');

const priceValue = parseFloat($priceNode.innerText); //innerText always returns an instinc independent of the value that is inside. To convert it we can Number(priceValue) or parseFloat(priceValue)
const quantityValue = $quantityNode.valueAsNumber;  //to acces values from an input has to be "value" or "value as number".

const subtotalValue = priceValue * quantityValue;

const $subtotalNode = $product.querySelector('.subtotal span');

$subtotalNode.innerText = subtotalValue;

return subtotalValue;
};

const $productItem = document.querySelector('.product');
updateSubtotal();

ITERATION 2
function calculateAll() {
  const $allProducts = document.querySelector('.product');

  for (let $product of $allProducts) {
    updateSubtotal($product);
  }
}
*/
