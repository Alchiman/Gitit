const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //DON'T DELETE YET
  router.get("/", (req, res) => {
    console.log(req.session.userId);
    db.getAllItems()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/login", (req, res) => {
    const { id } = req.body;
    req.session.userId = id;
    console.log(req.session.userId);
    return res.send(req.session.userId);
  });

  router.post("/logout", (req, res) => {
    console.log(req.session.userId);
    res.clearCookie("userId");
    req.session = null;
    return res.send(true);
  });
  return router;
};
