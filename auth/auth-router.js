const router = require('express').Router();
const jwt = require("jsonwebtoken")

const checkUsernameAndPasswordEntered = require("./checkUserNameAndPasswordEntered-middleware");
const checkUsernameUnique = require("./checkUsernameUnique-middleware")

const database = require("./auth-model");

router.post('/register', checkUsernameAndPasswordEntered, checkUsernameUnique, (req, res) => {
  // router.post('/register', checkUsernameAndPasswordEntered, (req, res) => {
  
  database.addUser(req.body)

    .then(addedUser =>{
      res.status(201).json({message: "Created account for " + req.body.username});
    })

    .catch(error => {
      res.status(500).json({message: "Could not add user", error});
    })

  

});

router.post('/login', checkUsernameAndPasswordEntered, (req, res) => {
  // implement login
});

module.exports = router;
