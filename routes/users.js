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
  router.get("/profile", (req, res) => {
    const id = req.session.userId;

    db.getUserInfo(id)
      .then(data => {
        let user = data;
        console.log("user:", data[0]);
        let isAdmin = data[0].is_admin;
        //checks to see if its an admin
        if (isAdmin === true) {
          console.log("is admin:", isAdmin);
          console.log("IM AN ADMIN");
          res.redirect("admin/orders");
          res.json({ user });
        }
        //if not what the user will see
        else {
          console.log("I'm not an admin");
          res.json({ user });
        }
      })
      .catch(err => {
        // res.status(500).json({ error: err.message });
      });
  });

  router.post("/profile/edit", (req, res) => {
    const id = req.session.userId;
    const { name, email, phone } = req.body;
    db.updateUserInfo(Number(id), name, email, phone)
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

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
    const userId = req.session.userId;
    db.userOrderHistory(userId)
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // user palces and order
  router.post("/orders", (req, res) => {
    const { userId } = req.session;
    console.log("userid from cookie", userId);
    const { orderCount, itemList } = req.body;
    console.log("itemList", itemList);
    db.createOrder(userId, orderCount)
      .then(data => {
        return db.addOrderLineItems(data.id, itemList);
      })
      .then(result => {
        console.log(result);
        return res.json({ result });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //user can see his order
  router.get("/orders", (req, res) => {
    const { userId } = req.session.userId;
    db.getUserPendingAcceptedOrder(userId)
      .then(data => {
        return res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // user cancels order
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
