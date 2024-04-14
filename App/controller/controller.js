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
          <button class="btn btn-warning m-1" style="width:100px" onclick="editProduct('${product.id}')">Edit</button>
          <br>
          <button class="btn btn-danger m-1" style="width:100px" onclick="delProduct('${product.id}')">Del</button>
          </td>
        </tr>
      `;
    html += htmlTr;
  }
  document.querySelector("#tblDanhSachSP").innerHTML = html;
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
