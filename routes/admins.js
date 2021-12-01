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
        res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/history", (req, res) => {
    db.adminOrderHistory()
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/menus", (req, res) => {
    db.getAllItems()
      .then(data => {
        const items = data;
        console.log("data:", data);
        res.json({ items });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/menus/delete", (req, res) => {
    const { name } = req.body;
    db.deleteItem(name)
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/menus/create", (req, res) => {
    const { name, price, description, img_url, tag } = req.body;
    console.log(name, price, description, img_url, tag);
    db.addNewItem(name, Number(price), description, img_url, tag)
      .then(data => {
        const items = data[0];
        console.log("data:", data[0]);
        res.json({ items });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/menus/edit", (req, res) => {
    const { name, price, description, img_url, tag, originalName } = req.body;
    db.updateItem(name, price, description, img_url, tag, originalName)
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/orders", (req, res) => {
    db.getPendingOrders()
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/orders/accept", (req, res) => {
    const { status, order_no } = req.body;
    db.acceptOrRejectOrder(status, order_no)
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/orders/reject", (req, res) => {
    const { status, order_no } = req.body;
    db.acceptOrRejectOrder(status, order_no)
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/orders/fulfill", (req, res) => {
    const { order_no } = req.body;
    db.fulfillOrder(order_no)
      .then(data => {
        return res.send({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
