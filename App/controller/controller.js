function getInfo() {
    var id = document.getElementById("MaSP").value;
    var name = document.getElementById("TenSP").value;
    var price = document.getElementById("GiaSP").value;
    var screen = document.getElementById().value;
    var backCamera = document.getElementById().value;
    var frontCamera = document.getElementById().value;
    var image = document.getElementById("HinhSP").value;
    var desc = document.getElementById("MoTaSP").value;
    var type = document.getElementById().value;
  
    return new Product(id, name, price, screen, backCamera, frontCamera, image, desc, type);
  }