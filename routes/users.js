/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const { addOrderLineItems } = require("../server/database");
const router = express.Router();

module.exports = db => {
  // get request for user menu items
  router.get("/items", (req, res) => {
    db.getAllItems()
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  // get request for user order history
  router.get("/orders", (req, res) => {
    const userId = req.session.user_id;
    db.userOrderHistory(userId)
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/orders", (req, res) => {
    // const userId = req.session.user_id;
    // will get back to this later
    db.createOrder(userId)
      .then(data => {
        return res.json({ data });
        addOrderLineItems(data.id, req.body.itemList);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/orders/cancel", (req, res) => {
    const orderNumber = req.body.order_number;
    db.cancelOrder(orderNumber)
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
