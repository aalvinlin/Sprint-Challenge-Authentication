const database = require("./auth-model");

module.exports = (req, res, next) => {

    database.getUserBy(req.username)
        .then(userCount => {
            if (userCount > 0)
                { res.status(400).json({message: "Username already taken."})}
            else
                { next(); }
        })
        .catch(error => {
            res.status(500).json({message: "server error in retrieving username", error})
        })

}