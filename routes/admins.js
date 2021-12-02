/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = db => {
  // this is the orders page
  router.get("/", (req, res) => {
    console.log("ADMIN:", req.session.isAdmin);
    if (req.session.isAdmin) {
      db.getPendingAcceptedOrders()
        .then(data => {
          const items = data;
          console.log("data:", data);
          return res.json({ items });
        })
        .catch(err => {
          return res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.get("/history", (req, res) => {
    console.log("ADMIN:", req.session.isAdmin);
    if (req.session.isAdmin) {
      db.adminOrderHistory()
        .then(data => {
          const items = data;
          console.log("data:", data);
          return res.json({ items });
        })
        .catch(err => {
          return res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });

  router.get("/menus", (req, res) => {
    if (req.session.isAdmin) {
      db.getAllItems()
        .then(data => {
          const items = data;
          console.log("data:", data);
          res.json({ items });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });

  router.post("/menus/create", (req, res) => {
    if (req.session.isAdmin) {
      const { name, price, description, img_url, tag } = req.body;
      console.log(name, price, description, img_url, tag);
      db.addNewItem(name, Number(price), description, img_url, tag)
        .then(data => {
          const items = data;

          return res.json({ items });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.post("/menus/edit", (req, res) => {
    if (req.session.isAdmin) {
      const { name, price, description, img_url, tag, originalName } = req.body;
      console.log(name, price, description, img_url, tag, originalName);
      console.log("REQ.BODY:", req.body);
      db.updateItem(name, price, description, img_url, tag, originalName)
        .then(data => {
          const items = data;
          console.log("ITEMS:", items);
          res.json({ items });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.post("/menus/delete", (req, res) => {
    if (req.session.isAdmin) {
      const { name } = req.body;
      console.log(name);
      db.deleteItem(name)
        .then(data => {
          return res.send({ data });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.post("/orders/accept", (req, res) => {
    if (req.session.isAdmin) {
      const { status, order_no } = req.body;
      db.acceptOrRejectOrder(status, order_no)
        .then(data => {
          return res.send({ data });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.post("/orders/reject", (req, res) => {
    if (req.session.isAdmin) {
      const { status, order_no } = req.body;
      db.acceptOrRejectOrder(status, order_no)
        .then(data => {
          return res.send({ data });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  router.post("/orders/fulfill", (req, res) => {
    if (req.session.isAdmin) {
      const { order_no } = req.body;
      db.fulfillOrder(order_no)
        .then(data => {
          return res.send({ data });
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    } else {
      return res.status(403).send("not an admin");
    }
  });
  return router;
};
