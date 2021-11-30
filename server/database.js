/* eslint-disable camelcase */
const { Pool } = require("pg");

// PG database client/connection setup
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

const addNewItem = function(name, price, description, img_url, tag) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.addNewItem = addNewItem;

const updateItem = function(name, price, description, img_url, tag) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateItem = updateItem;

const deleteItem = function(name) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.deleteItem = deleteItem;

const acceptOrRejectOrder = function(status, order_no) {
  queryParams = [];
  let queryString = `UPDATE orders SET status = $1 WHERE status = $2 AND order_number = $3;`;
  if (status === "rejected") {
    queryParams.push("rejected", "pending");
  }
  if (status === "accepted") {
    queryParams.push("accepted", "pending");
  }
  queryParams.push(order_no);
  return db
    .query(queryString, queryParams)
    .then(() => {
      return true;
    })
    .catch(err => console.log(err.message));
};
exports.acceptOrRejectOrder = acceptOrRejectOrder;

const cancelOrder = function(order_no) {
  return db
    .query(
      `UPDATE orders
    SET status = 'canceled'
    WHERE status = $1
    OR status = $2
    AND order_number = $3;`,
      ["accepted", "pending", order_no]
    )
    .then(() => {
      return true;
    })
    .catch(err => console.log(err.message));
};
exports.cancelOrder = cancelOrder;

const fulfillOrder = function(order_no) {
  return db
    .query(
      `UPDATE orders
      SET status = 'fulfilled',
      date_finished = NOW()
      WHERE status = 'accepted' AND  order_number = $1;`,
      [order_no]
    )
    .then(() => {
      return true;
    })
    .catch(err => console.log(err.message));
};
exports.fulfillOrder = fulfillOrder;

const getActiveOrders = function() {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getActiveOrders = getActiveOrders;

const getOrderHistory = function() {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};

exports.getOrderHistory = getOrderHistory;

const getPhoneNumber = function(order_no) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getPhoneNumber = getPhoneNumber;

const createOrder = function(itemList) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.createOrder = createOrder;

const getOrder = function(order_no) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getOrder = getOrder;

const getUserInfo = function() {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getUserInfo = getUserInfo;

const updateUserInfo = function(name, email, phone) {
  return db
    .query(``)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateUserInfo = updateUserInfo;
