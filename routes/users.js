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

  router.post("/profile/:id", (req, res) => {
    const { id, name, email, phone } = req.body;
    db.updateUserInfo(id, name, email, phone)
      .then(data => {
        const user = data;
        console.log('data:', data);
        res.json({ user });

      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });


  return router;
};
