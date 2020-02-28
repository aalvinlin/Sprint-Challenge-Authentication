const router = require('express').Router();

router.post('/register', checkUsernameAndPasswordEntered, checkUsernameUnique, (req, res) => {
      // let { username, password } = req.body;

});

router.post('/login', checkUsernameAndPasswordEntered, (req, res) => {
  // implement login
});

module.exports = router;
