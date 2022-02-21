/* eslint-disable func-style */
function getAllMenuItems() {
  let url = "/api/";
  return $.ajax({
    url
  });
}

// getItemPrices(itemList) {
//   return $.ajax({
//     url: "/users/prices",
//     data:
//   });
// }

function sendCustomerSms() {
  return $.ajax({
    method: "POST",
    url: "/api/sms"
  });
}
function getAdminPendingAcceptedOrders() {
  return $.ajax({
    method: "GET",
    url: "/admins/"
  });
}
function adminOrderHistory() {
  return $.ajax({
    method: "GET",
    url: "/admins/history"
  });
}

function acceptOrder(status, orderNo) {
  return $.ajax({
    method: "POST",
    url: "/admins/orders/accept",
    data: { status: status, order_no: orderNo }
  });
}

function getOrderCount() {
  let url = "/admins/orders/count";
  return $.ajax({
    url
  });
}

function cancelOrder(orderNo) {
  console.log("cancel order is", orderNo);
  return $.ajax({
    method: "POST",
    url: "/users/orders/cancel",
    data: { order_no: orderNo }
  });
}

function updateItem(name, price, description, imgUrl, tag, originalName) {
  return $.ajax({
    method: "POST",
    url: "/admins/menus/edit",
    data: {
      name: name,
      price: price,
      img_url: imgUrl,
      tag: tag,
      description: description,
      original_name: originalName
    }
  });
}

function deleteItem(data) {
  console.log("data", data);
  return $.ajax({
    method: "POST",
    url: "/admins/menus/delete",
    data: data
  });
}

function rejectOrder(status, orderNo) {
  return $.ajax({
    method: "POST",
    url: "/admins/orders/reject",
    data: { status: status, order_no: orderNo }
  });
}

function updateUserInfo(name, email, phone) {
  return $.ajax({
    method: "POST",
    url: "users/profile/edit",
    data: { name: name, email: email, phone: phone }
  });
}
function addNewItem(name, price, description, img_url, tag) {
  return $.ajax({
    method: "POST",
    url: "/admins/menus/create",
    // name, price, description, img_url, tag
    data: {
      name: name,
      price: price,
      description: description,
      img_url: img_url,
      tag: tag
    }
  });
}

function fulfillOrder(orderNo) {
  return $.ajax({
    method: "POST",
    url: "/admins/orders/fulfill",
    data: { order_no: orderNo }
  });
}

function getAdminHistory() {
  return $.ajax({
    url: "/admins/history"
  });
}

//let myData = JSON.stringify({ userId: 1, orderCount: 11, itemList: { 3: 1, 4: 1 } });
function createOrder(data) {
  return $.ajax({
    method: "POST",
    url: "/users/orders",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  });
}

function logIn(id) {
  return $.ajax({
    method: "POST",
    url: "/api/login",
    data: { id: id }
  });
}

function logOut() {
  return $.ajax({
    method: "POST",
    url: "/api/logout"
  });
}

function getUserInfo() {
  return $.ajax({
    method: "GET",
    url: "/users/profile"
  });
}

function getUserPendingAcceptedOrder(user_id) {
  return $.ajax({
    method: "GET",
    url: "/users/orders",
    data: { userId: user_id }
  });
}

function getItemInfo(item_name) {
  return $.ajax({
    method: "GET",
    url: "/admins/menus/edit",
    data: { itemName: item_name }
  });
}
