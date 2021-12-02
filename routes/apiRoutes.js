const express = require("express");
const router = express.Router();

module.exports = db => {
  //DON'T DELETE YET
  router.get("/", (req, res) => {
    console.log(req.session.userId);
    db.getAllItems()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/login", (req, res) => {
    const { id } = req.body;
    req.session.userId = id;
    console.log(req.session.userId);
    db.isAdmin(id).then(data => {
      const isAdmin = data.is_admin;
      console.log("ISADMIN:", isAdmin);
      if (isAdmin === false) {
        console.log("NOT AN ADMIN");

        req.session.isAdmin = false;
        console.log("AFTER SET FALSE:", req.session.isAdmin);
        return res.send(req.session.isAdmin);
      } else {
        req.session.isAdmin = true;
        console.log("AFTER SET TRUE:", req.session.isAdmin);

        return res.send(req.session.isAdmin);
      }
    });
    console.log("before return", req.session.isAdmin);
    //this was breaking it ↓ ↓ ↓ ↓ ↓ ↓ ↓
    // return res.send(req.session.userId);
  });

  router.post("/logout", (req, res) => {
    console.log(req.session.userId);
    console.log("ISADMIN:", req.session.isAdmin);
    res.clearCookie("userId");
    res.clearCookie("isAdmin");
    req.session = null;
    return res.send(true);
  });
  return router;
};
