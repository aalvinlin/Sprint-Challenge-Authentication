const router = require('express').Router();
const bcrypt = require("bcryptjs");

const checkUsernameAndPasswordEntered = require("./checkUserNameAndPasswordEntered-middleware");
const checkUsernameUnique = require("./checkUsernameUnique-middleware")
const generateToken = require("./generateToken");
const database = require("./auth-model");

// router.post('/register', checkUsernameAndPasswordEntered, checkUsernameUnique, (req, res) => {
router.post('/register', checkUsernameAndPasswordEntered, (req, res) => {
  
  // encrypt user password
  let passwordHash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = passwordHash;

  database.addUser(req.body)
    .then(addedUser =>{

      const token = generateToken(req.body);

      res.status(201).json({message: "Created account for " + req.body.username, token});
    })

    .catch(error => {
      res.status(500).json({message: "Could not add user", error});
    })

});

router.post('/login', checkUsernameAndPasswordEntered, (req, res) => {
  // implement login
});

module.exports = router;
