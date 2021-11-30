/* eslint-disable camelcase */
const { Pool } = require('pg');

// PG database client/connection setup
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

const getAllItems = function() {
  return db
    .query(`SELECT * FROM items;`)
    .then(result => {
      return result.rows;
    })
    .catch(err => console.log(err.message));
};
exports.getAllItems = getAllItems;


const addNewItem = function(name, price, description, img_url, tag) {
  const values = [name, price, description, img_url, tag];
  return db
    .query(`
    INSERT INTO items (name,price,description,img_url,tag)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`, values)
    .then(result => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.addNewItem = addNewItem;

const updateItem = function(name, price, description, img_url, tag, originalName) {
  const values = [name, price, description, img_url, tag, originalName];
  return db
    .query(`
    UPDATE items
    SET name = $1,
    price = $2,
    description = $3,
    img_url = $4,
    tag = $5
    WHERE name = $6;`, values)
    .then(() => {
      return true;
    })
    .catch(err => console.log(err.message));
};
exports.updateItem = updateItem;

const deleteItem = function(name) {
  const values = [name];
  return db
    .query(`
    DELETE FROM items
    WHERE name = $1
    RETURNING *;`, values)
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
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getActiveOrders = getActiveOrders;

const getOrderHistory = function() {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};

exports.getOrderHistory = getOrderHistory;

const getPhoneNumber = function(order_no) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getPhoneNumber = getPhoneNumber;

const getOrderCount = function() {
  return db
    .query(
      `SELECT COUNT(*) FROM orders;`)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getOrderCount = getOrderCount;

const createOrder = function(user_id, order_count) {
  const date = new Date();
  let order_no = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split("T")[0];
  order_no = order_no.replace(/-/g, "");
  order_count++;
  order_no += order_count;
  return db
    .query(
      `INSERT INTO orders(user_id, order_number, status, date_created)
       VALUES($1, $2, 'PENDING', NOW())
       RETURNING *;`, [user_id, order_no])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.createOrder = createOrder;

const addOrderLineItems = function(order_id, itemList) {
  let queryString = `INSERT INTO order_line_items (item_id, order_id, quantity) VALUES`;
  const numberOfItems = Object.keys(itemList).length * 2;
  let queryParams = Object.entries(itemList).flat().map((vals) => parseInt(vals));
  for (let i = 1; i <= numberOfItems; i += 2) {
    queryString += ` ($${i}, ${order_id}, $${i + 1}),`;
  }
  queryString = queryString.slice(0, -1);
  queryString += ` RETURNING *;`;

  return db
    .query(queryString, queryParams)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.addOrderLineItems = addOrderLineItems;

const getOrder = function(order_no) {
  return db
    .query(``,)
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getOrder = getOrder;

const getUserInfo = function(id) {
  return db
    .query(`
      SELECT name ,phone ,email ,password ,is_admin
      FROM users WHERE id = $1`, [id])
    .then(result => {
      console.log(result.rows);
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.getUserInfo = getUserInfo;

const updateUserInfo = function(id, name, email, phone) {
  return db
    .query(`
    UPDATE users
    SET name = $2,
    email = $3,
    phone = $4
    WHERE id = $1;`, [id, name, email, phone])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};
exports.updateUserInfo = updateUserInfo;
