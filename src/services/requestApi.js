import http from "./http-common";

class DataService {
  // Login
  Login(data) {
    return http.get("user/login?" + data);
  }

  // Payment Gateway Services
  PurchaseItem(data) {
    return http.get("razorpay/order?" + data);
  }
  PurchaseCapture(id, data) {
    return http.post("razorpay/capture/" + id, data);
  }
  FetchPayment(id) {
    return http.get("razorpay/fetch/" + id);
  }

  // Register
  Register(data) {
    return http.post("user/signup", data);
  }

  // User Profile Update
  ProfileUpdate(data) {
    return http.patch("user/profile", data);
  }
  GetProfileData() {
    return http.get("user/user_data");
  }
  GetAllPoojaOrder() {
    return http.get("puja/order/all");
  }

  // Product Services
  GetBannerAll(type) {
    return http.get("banner/type/" + type);
  }

  // Product Services
  GetProductAll() {
    return http.get("product/all");
  }
  GetProductById(id) {
    return http.get("product/id/" + id);
  }

  // Article Services
  GetArticleAll() {
    return http.get("article/all");
  }
  GetArticleById(id) {
    return http.get("article/id/" + id);
  }

  // Pooja Services
  GetPoojaAll() {
    return http.get("puja/all");
  }
  GetPoojaById(id) {
    return http.get("puja/id/" + id);
  }
  GetPoojaPackagesByPoojaId(id) {
    return http.get("puja_packages/puja/" + id);
  }
  BookPooja(data) {
    return http.post("puja/order/create", data);
  }

  // Wishlist API Services
  GetWishlistAll() {
    return http.get("user/wishlist/all");
  }
  GetCartAll() {
    return http.get("user/cart/all");
  }
  CartCreate(data) {
    return http.post("user/cart/create", data);
  }
  CartUpdate(id, data) {
    return http.patch("user/cart/update" + id, data);
  }
  CartDelete(id) {
    return http.delete("user/cart/delete/" + id);
  }
}

export default new DataService();
