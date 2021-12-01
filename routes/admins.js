/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    db.createOrder(1, 6)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/menus", (req, res) => {
    db.getAllItems()
      .then(data => {
        const items = data;
        console.log("data:",data)
        res.json({ items });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/menus/create", (req, res) => {
    const {name, price, description, img_url, tag} = req.body
    console.log(name, price, description, img_url, tag)
    db.addNewItem(name, Number(price), description, img_url, tag)
      .then(data => {
        const items = data[0];
        console.log("data:",data[0])
        res.json({ items });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/menus/edit", (req, res) => {
    const {name, price, description, img_url, tag, originalName} = req.body
    console.log(name, price, description, img_url, tag, originalName)
    console.log('REQ.BODY:',req.body)
    db.updateItem(name, price, description, img_url, tag, originalName)
      .then(data => {
        const items = data;
        console.log("ITEMS:",items)
        res.json({ items });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
