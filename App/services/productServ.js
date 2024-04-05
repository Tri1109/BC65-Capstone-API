const BASE_URL = "https://66091b4e0f324a9a2882bed5.mockapi.io/Products";

var productServ = {
  getProduct: function (name) {
    return axios({
      url: BASE_URL,
      method: "GET",
      params: {
        name: name || undefined,
      },
    });
  },

  delProductByID: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  addProduct: function (sp) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: sp,
    });
  },
  getProductByID: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  updateProductByID: function (id, sp) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: sp,
    });
  },
};
