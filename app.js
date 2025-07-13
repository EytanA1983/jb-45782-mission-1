let products = [];

const stored = localStorage.getItem("products");
if (stored) {
  products = JSON.parse(stored);
  document.getElementById("cartBody").innerHTML = getCartHTML();
}

function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  const product = { name, price, category, image };
  products.push(product);
  saveProducts();

  document.getElementById("productForm").reset();
  document.getElementById("cartBody").innerHTML = getCartHTML();
}

function getCartHTML() {
  let html = '';
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    html += `
      <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" class="productImage"></td>
        <td><button onclick="deleteProduct(${i})">Delete</button></td>
      </tr>
    `;
  }
  return html;
}

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  document.getElementById("cartBody").innerHTML = getCartHTML();
}
