const request = require("supertest");
const server = require("../api/server");

describe("Tests are working.", () => {
    test("tests run", () => {
        expect(true).toBe(true);
    })
});

describe("GET /api/auth/register", () => {
    test("should return a 200 status code", () => {
        return request(server)
            .get("/api/auth/register")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("GET /api/auth/login", () => {
    test("should return a 200 status code", () => {
        return request(server)
            .get("/api/auth/login")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});
