/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/profile/:id", (req, res) => {
    const id = req.params.id
   
    db.getUserInfo(id)
      .then(data => {
        let user = data;
        console.log("user:",data[0])
        let isAdmin = data[0].is_admin
        //checks to see if its an admin
        if (isAdmin === true){

          console.log('is admin:',isAdmin)
          console.log("IM AN ADMIN")
          res.redirect("admin/orders")
          res.json({ user });
        }
        //if not what the user will see
        else{  
          console.log("I'm not an admin" )
          res.json({ user })
      }
        
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/profile/:id/edit", (req, res) => {
   const {id ,name ,email ,phone} = req.body
   console.log(id ,name, email, phone)
    db.updateUserInfo(id, name, email, phone)
      .then(data => {
        const user = data;
        console.log('data:',data)
        res.json({ user });

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

