const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();


const serverConfig = {
    origin: "http://localhost:1234",
    credentials: true
}

server.use(helmet());
server.use(cors(serverConfig));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.use("/api", (req, res) => res.status(200).json({message: "Welcome to the Dad Jokes API!"}));

module.exports = server;
