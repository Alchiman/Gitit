/* eslint-disable camelcase */
const { Pool } = require('pg');

// PG database client/connection setup
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

const addNewItem = function(name, price, description, img_url, tag) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.addNewItem = addNewItem;

const updateItem = function(name, price, description, img_url, tag) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateItem = updateItem;

const deleteItem = function(name) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.deleteItem = deleteItem;

const changeStatus = function(status, order_no) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.changeStatus = changeStatus;

const getActiveOrders = function() {
  return db
    .query(`SELECT * FROM orders WHERE status = 'accepted';`,)
    .then(result => {
      
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getActiveOrders = getActiveOrders;

const getOrderHistory = function() {
  return db
    .query(`SELECT * FROM orders WHERE status = 'fulfilled' or status = 'rejected';`,)
    .then(result => {
      
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};

exports.getOrderHistory = getOrderHistory;

const getPhoneNumber = function(order_no) {
  return db
    .query(` SELECT users.name, users.phone , orders.order_number FROM orders JOIN users ON orders.user_id = users.id WHERE orders.order_number = ${order_no};`,)
    .then(result => {
     
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getPhoneNumber = getPhoneNumber;

const createOrder = function(itemList) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.createOrder = createOrder;

const getOrder = function(order_no) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getOrder = getOrder;

const getUserInfo = function() {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getUserInfo = getUserInfo;

const updateUserInfo = function(name, email, phone) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateUserInfo = updateUserInfo;

const itemIdByName = function(name) {
  return db
    .query(`SELECT id  FROM items WHERE name = ${name};`,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateUserInfo = itemIdByName;
