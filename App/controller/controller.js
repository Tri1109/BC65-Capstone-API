function getInfo() {
  var id = document.getElementById("MaSP").value;
  var name = document.getElementById("TenSP").value;
  var price = document.getElementById("GiaSP").value;
  var screen = document.getElementById("screen").value;
  var backCamera = document.getElementById("backCamera").value;
  var frontCamera = document.getElementById("frontCamera").value;
  var img = document.getElementById("HinhSP").value;
  var desc = document.getElementById("MoTaSP").value;
  var type = document.getElementById("type").value;

  return new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
}

function renderProductList(ProductList) {
  var html = "";
  for (var i = 0; i < ProductList.length; i++) {
    var product = ProductList[i];
    var htmlTr = `
        <tr  >
          <td class="htmlTd" >${product.id}</td>
          <td class="htmlTd" >${product.name}</td>
          <td class="htmlTd" >${product.price}</td>
          <td class="htmlTd" style = "width:200px"><img src="${product.img}" style="width:100%" alt="" class="my-5"></td>
          <td class="htmlTd" >${product.desc}</td>
          <td class="htmlTd">
          <button class="btn btn-warning m-1" onclick="editProduct('${product.id}')">Edit</button>
          <br>
          <button class="btn btn-danger m-1" onclick="delProduct('${product.id}')">Del</button>
          </td>
        </tr>
      `;
    html += htmlTr;
  }
  document.querySelector("#tblDanhSachSP").innerHTML = html;
}

//--------------Customer------------------//
function renderProdCustomerList(prodList) {
  const prodCustomerList = document.querySelector(".customer_content");
  prodCustomerList.innerHTML = "";
  prodList.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <img src="${product.img}" alt="${product.name}" style="width: 200px">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <p>Price: ${product.price}</p>
    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    prodCustomerList.appendChild(productDiv);
  })
}
   // Lọc sản phẩm theo type
   function filterProducts(type) {
    if (type === "all") {
      return productCustomerList; // Trả về tất cả sản phẩm nếu người dùng chọn "Tất cả"
    } else {
      return productCustomerList.filter(product => product.type === type); // Lọc sản phẩm theo thương hiệu
    }
  }
//------------------Giỏ hàng-------------------
// Tính tổng tiền của tất cả sản phẩm trong giỏ hàng
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// Hiển thị giỏ hàng
function displayCart() {
  let cartBody = document.getElementById('cartBody');
  cartBody.innerHTML = '';

  // Tạo bảng để hiển thị giỏ hàng
  let table = document.createElement('table');
  table.classList.add('table');

  // Tạo header của bảng
  let headerRow = table.insertRow();
  headerRow.innerHTML = `
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Action</th>
  `;

  // Thêm sản phẩm vào bảng
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let row = table.insertRow();

    // Thêm thông tin sản phẩm vào từng ô của hàng
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td class="quantity-buttons">
        <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${i}, -1)">-</button>
        ${product.quantity}
        <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${i}, 1)">+</button>
      </td>
      <td>${product.price * product.quantity}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i})">Remove</button>
      </td>
    `;

    // Thêm hàng vào bảng
    table.appendChild(row);
  }

  // Thêm bảng vào phần hiển thị của modal
  cartBody.appendChild(table);

  // Hiển thị tổng tiền
  let totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h5>Total: ${calculateTotal()}</h5>`;
  cartBody.appendChild(totalDiv);
}

// clear form
function clearform() {
  document.getElementById("MaSP").value = "";
  document.getElementById("TenSP").value = "";
  document.getElementById("GiaSP").value = "";
  document.getElementById("screen").value = "";
  document.getElementById("backCamera").value = "";
  document.getElementById("frontCamera").value = "";
  document.getElementById("HinhSP").value = "";
  document.getElementById("MoTaSP").value = "";
  document.getElementById("type").value = "select";
}
// xóa các thông báo lỗi
function clearErrorMessages() {
  document.querySelector("#tbTenSP").innerHTML = "";
  document.querySelector("#tbGia").innerHTML = "";
  document.querySelector("#tbScreen").innerHTML = "";
  document.querySelector("#tbBack").innerHTML = "";
  document.querySelector("#tbFront").innerHTML = "";
  document.querySelector("#tbImg").innerHTML = "";
  document.querySelector("#tbMoTa").innerHTML = "";
  document.querySelector("#tbLoai").innerHTML = "";
}
