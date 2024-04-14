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
  // Chuyển đổi giá trị nhập vào thành chữ thường
  var lowerCaseValue = value.toLowerCase();

  // So sánh giá trị nhập vào với các giá trị thuộc dòng "iphone" hoặc "samsung"
  if (lowerCaseValue === "iphone" || lowerCaseValue === "samsung") {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  }
}
// Kiểm tra trùng tên sản phẩm, tránh so sánh với phần tử đang cập nhật
function kiemTraTrung(value, array, idErr, message, currentId) {
  var checkKitu = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Lọc ra những sản phẩm có ID khác với currentId
  var filteredArray = array.filter(function (dt) {
    return dt.id !== currentId;
  });

  var viTri = filteredArray.findIndex(function (dt) {
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
function kiemTraTrungImage(value, array, idErr, message, currentImage) {
  var checkImage = value.toLowerCase();
  var currentImageLowerCase = currentImage ? currentImage.toLowerCase() : null; // Thêm kiểm tra

  // Kiểm tra xem đường link hình ảnh đã tồn tại trong danh sách sản phẩm (trừ sản phẩm đang cập nhật) hay không
  var viTri = array.findIndex(function (dt) {
    var isImage = dt.img.toLowerCase();
    return isImage === checkImage && isImage !== currentImageLowerCase;
  });

  if (viTri !== -1) {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "flex";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}
