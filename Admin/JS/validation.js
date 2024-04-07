//Kiểm tra chữ
function kiemTraChu(value, idErr, message) {
  // Chuyển đổi chuỗi nhập vào và từ khóa cần kiểm tra thành chữ thường
  value = value.toLowerCase();

  // Kiểm tra xem chuỗi có chứa từ "iphone" hoặc "samsung" không
  if (value.includes("iphone") || value.includes("samsung")) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  }
}
// Kiểm tra rỗng
function kiemTraRong(value, idErr, message) {
  if (value === "" || value == 0) {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
// kiểm tra ký số
function kiemTraKySo(value, idErr, message) {
  const re = /^[0-9]+$/;
  var isNumber = re.test(value);
  if (isNumber) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}
// Kiểm tra định dạng hình ảnh
function checkImage(url, idErr, message) {
  if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    // Nếu định dạng hình ảnh hợp lệ, không cần hiển thị thông báo lỗi
    document.querySelector(idErr).innerHTML = "";
    return true; // Trả về true để biểu thị hình ảnh hợp lệ
  } else {
    // Nếu định dạng hình ảnh không hợp lệ, hiển thị thông báo lỗi
    document.querySelector(idErr).innerHTML = message;
    return false; // Trả về false để biểu thị hình ảnh không hợp lệ
  }
}

// Kiểm tra loại
function kiemTraLoai(value, idErr, message) {
  if (value === "iphone" || value === "samsung") {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  }
}
// Kiểm tra trùng
function kiemTraTrung(value, array, idErr, message) {
  // Loại bỏ các ký tự không phải là chữ cái và số từ tên sản phẩm
  var checkKitu = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Tìm kiếm trong mảng sản phẩm xem có sản phẩm nào có phần loại bỏ ký tự không phải là chữ cái và số giống với checkKitu không
  var viTri = array.findIndex(function (dt) {
    var checkName = dt.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return checkName === checkKitu;
  });

  if (viTri != -1) {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function kiemTraTrungImage(value, array, idErr, message) {
  var checkImage = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var viTri = array.findIndex(function (dt) {
    var isImage = dt.image.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return isImage === checkImage;
  });
  if (viTri != -1) {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
