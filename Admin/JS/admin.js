// Call API từ Back-End
var productList = [];
function fetchProductList() {
  productServ
    .getProduct()
    .then(function (respone) {
      productList = respone.data;
      renderProductList(productList);
    })
    .catch(function (err) {});
}
fetchProductList();
function delProduct(id) {
  productServ
    .delProductByID(id)
    .then(function (respone) {
      fetchProductList();
    })
    .catch(function (err) {});
}
// clear form hiển thị nút thêm ẩn nút cập nhật
document.getElementById("myModal").onclick = function () {
  clearform();
  clearErrorMessages();
  $("#updateProduct").hide();
  $("#addProduct").show();
};
//thêm
function addProduct() {
  var sp = getInfo();
  var isValid = kiemTraRong(
    sp.name,

    "#tbTenSP",
    "Tên Sản Phẩm không được để trống"
  );
  // Kiểm tra Tên
  isValid &=
    kiemTraRong(sp.name, "#tbTenSP", "Tên Sản Phẩm không được để trống") &&
    kiemTraChu(
      sp.name,
      "#tbTenSP",
      "Sản phẩm phải thuộc dòng Iphone hoặc Samsung"
    ) &&
    kiemTraTrung(
      sp.name,
      productList,
      "#tbTenSP",
      "Tên sản phẩm đã tồn tại",
      sp.id
    );
  // Kiểm tra giá
  isValid &=
    kiemTraRong(sp.price, "#tbGia", "Giá sản phẩm không được để trống") &&
    kiemTraKySo(sp.price, "#tbGia", "Giá sản phẩm phải là số");
  // Kiểm tra screen,front,back,description,select
  isValid &= kiemTraRong(sp.screen, "#tbScreen", "Không được để rỗng");
  isValid &= kiemTraRong(sp.backCamera, "#tbBack", "Không được để rỗng");
  isValid &= kiemTraRong(sp.frontCamera, "#tbFront", "Không được để rỗng");
  isValid &= kiemTraRong(sp.desc, "#tbMoTa", "Không được để rỗng");
  isValid &= kiemTraLoai(sp.type, "#tbLoai", "Vui lòng chọn loại điện thoại");
  // Kiểm tra định dạng file IMG
  isValid &=
    kiemTraRong(sp.img, "#tbImg", "Không được để rỗng") &&
    checkImage(sp.img, "#tbImg", "Đường dẫn không đúng định dạng") &&
    kiemTraTrungImage(sp.img, productList, "#tbImg", "Đường Link Đã Tồn Tại");

  if (isValid) {
    productServ
      .addProduct(sp)
      .then(function (respone) {
        $("#exampleModalCenter").modal("hide");
        fetchProductList();
      })
      .catch(function (err) {});
  }
}
function editProduct(id) {
  clearErrorMessages();
  productServ
    .getProductByID(id)
    .then(function (respone) {
      var sp = respone.data;
      // hiển thị form sửa
      document.querySelector("#MaSP").value = sp.id;
      document.querySelector("#TenSP").value = sp.name;
      document.querySelector("#GiaSP").value = sp.price;
      document.querySelector("#HinhSP").value = sp.img;
      document.querySelector("#MoTaSP").value = sp.desc;
      document.querySelector("#type").value = sp.type;
      document.querySelector("#screen").value = sp.screen;
      document.querySelector("#backCamera").value = sp.backCamera;
      document.querySelector("#frontCamera").value = sp.frontCamera;
      // hiển thị cập nhật và ẩn nút thêm
      $("#updateProduct").show();
      $("#addProduct").hide();
      $("#exampleModalCenter").modal("show");
    })
    .catch(function (err) {});
}
function updateProduct() {
  var sp = getInfo();
  var isValid = kiemTraRong(
    sp.name,

    "#tbTenSP",
    "Tên Sản Phẩm không được để trống"
  );
  // Kiểm tra Tên
  isValid &=
    kiemTraRong(sp.name, "#tbTenSP", "Tên Sản Phẩm không được để trống") &&
    kiemTraChu(
      sp.name,
      "#tbTenSP",
      "Sản phẩm phải thuộc dòng Iphone hoặc Samsung"
    ) &&
    kiemTraTrung(
      sp.name,
      productList,
      "#tbTenSP",
      "Tên sản phẩm đã tồn tại",
      sp.id
    );
  // Kiểm tra giá
  isValid &=
    kiemTraRong(sp.price, "#tbGia", "Giá sản phẩm không được để trống") &&
    kiemTraKySo(sp.price, "#tbGia", "Giá sản phẩm phải là số");
  // Kiểm tra screen,front,back,description,select
  isValid &= kiemTraRong(sp.screen, "#tbScreen", "Không được để rỗng");
  isValid &= kiemTraRong(sp.backCamera, "#tbBack", "Không được để rỗng");
  isValid &= kiemTraRong(sp.frontCamera, "#tbFront", "Không được để rỗng");
  isValid &= kiemTraRong(sp.desc, "#tbMoTa", "Không được để rỗng");
  isValid &= kiemTraLoai(sp.type, "#tbLoai", "Vui lòng chọn loại điện thoại");
  // Kiểm tra định dạng file IMG
  isValid &=
    kiemTraRong(sp.img, "#tbImg", "Không được để rỗng") &&
    checkImage(sp.img, "#tbImg", "Đường dẫn không đúng định dạng") &&
    kiemTraTrungImage(sp.img, productList, "#tbImg", "Đường Link Đã Tồn Tại");

  if (isValid) {
    productServ
      .updateProductByID(sp.id, sp)
      .then(function (respone) {
        $("#exampleModalCenter").modal("hide");
        fetchProductList();
      })
      .catch(function (err) {});
  }
}

document.querySelector("#btnTimSP").onclick = function () {
  var textSearch = document
    .querySelector("#searchName")
    .value.trim()
    ?.toLowerCase();
  var resultSearch = [];
  if (textSearch.length > 0) {
    resultSearch = productList.filter(function (sp) {
      return sp.name.toLowerCase().includes(textSearch);
    });
    renderProductList(resultSearch);
  } else {
    renderProductList(productList);
  }
};
let isAscending = true;
let buttonText = "Sắp xếp theo giá (tăng)";
function sapxep(productList) {
  if (isAscending) {
    productList.sort((a, b) => a.price - b.price);
    buttonText = "Sắp xếp theo giá (giảm)";
  } else {
    productList.sort((a, b) => b.price - a.price);
    buttonText = "Sắp xếp theo giá (tăng)";
  }
  isAscending = !isAscending; // Chuyển đổi trạng thái

  // Cập nhật văn bản của nút
  document.querySelector(".btn-sort").innerText = buttonText;

  renderProductList(productList);
}
