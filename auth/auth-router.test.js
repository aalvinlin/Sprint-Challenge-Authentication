const request = require("supertest");
const server = require("../api/server");

describe("Tests are working.", () => {
    test("tests run", () => {
        expect(true).toBe(true);
    })
});

// Register endpoint tests

describe("GET /api/auth/register", () => {
    test("should return a 200 status code for successful registration", () => {
        return request(server)
            .get("/api/auth/register")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("POST /api/auth/register", () => {
    test("should return a 400 status code for missing username and missing password", () => {
        return request(server)
            .post("/api/auth/register")
            .send("bad data")
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

describe("POST /api/auth/register", () => {
    test("should return a 400 status code for missing password", () => {
        return request(server)
            .post("/api/auth/register")
            .send({username: "one"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

describe("POST /api/auth/register", () => {
    test("should return a 400 status code for a username already in use", () => {
        return request(server)
            .post("/api/auth/register")
            .send({username: "one", password: "new password"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});


// Login endpoint tests

describe("GET /api/auth/login", () => {
    test("should return a 200 status code for successful login", () => {
        return request(server)
            .get("/api/auth/login")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("POST /api/auth/login", () => {
    test("should return a 400 status code for missing username and missing password", () => {
        return request(server)
            .post("/api/auth/login")
            .send("bad data")
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

describe("POST /api/auth/login", () => {
    test("should return a 400 status code for missing password", () => {
        return request(server)
            .post("/api/auth/login")
            .send({username: "one"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

describe("POST /api/auth/login", () => {
    test("should return a 400 status code for invalid credentials", () => {
        return request(server)
            .post("/api/auth/login")
            .send({username: "one", password: "new password"})
            .then(response => {
                expect(response.status).toBe(401);
            })
    })
});