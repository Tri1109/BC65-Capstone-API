class CartItem {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}


// Gọi API và hiển thị dữ liệu
let productCustomerList = [];

function fetchCustomerProductList() {
productServ
.getProduct()
.then(function (respone) { 
  productCustomerList = respone.data;
  renderProdCustomerList(productCustomerList);
  
})
.catch(function (err) {});
}
fetchCustomerProductList();
document.getElementById("filterType").onchange = function() {
var selectedType = this.value;
var filteredProducts = filterProducts(selectedType);
renderProdCustomerList(filteredProducts);
};

// Mảng chứa các sản phẩm trong giỏ hàng
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng dựa trên ID sản phẩm
function addToCart(productID) {
let prod = productCustomerList.find(item => item.id == productID);

if (prod) {
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  let existingProduct = cart.find(item => item.id == productID);
  if (existingProduct) {
    // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
    existingProduct.quantity++;
    saveCartToLocalStorage();
    displayCart();
    $('#cartModal').modal('show');
  } else {
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
    newProd = new CartItem(prod.id , prod.name, prod.price, 1);
    cart.push(newProd);
    saveCartToLocalStorage();
    // Hiển thị giỏ hàng
    displayCart();
    $('#cartModal').modal('show'); // Hiện modal giỏ hàng
  }
}
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToLocalStorage();
  // Hiển thị giỏ hàng
  displayCart();
}

// Thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }
  saveCartToLocalStorage();
  // Hiển thị giỏ hàng
  displayCart();
}

// Xóa giỏ hàng
function clearCart() {
  cart = [];
  saveCartToLocalStorage();
  displayCart();
}

// Thanh toán
function checkout() {
  if (cart.length > 0 ) {
    alert('Đã thanh toán! Cảm ơn bạn đã mua hàng!');
    clearCart();
    $('#cartModal').modal('hide');
  } else {
    alert('Giỏ hàng hiện không có sản phẩm nào!');
    $('#cartModal').modal('hide');
  }
  
}


// Lưu giỏ hàng vào local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Lấy giỏ hàng từ local storage khi tải lại trang
function loadCartFromLocalStorage() {
  let savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    displayCart();
  }
}
loadCartFromLocalStorage()     