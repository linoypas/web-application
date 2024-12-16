const request = require('supertest');
const initApp = require('../server');
const mongoose = require('mongoose');
const Posts = require('../models/posts');

var app;

beforeAll(async () => {
    app = await initApp();
    await Posts.deleteMany();
});

afterAll(async () => {
    await mongoose.connection.close();
});

var post_id = "";
const test_post = {
    owner: "linoy",
    title: "test title",
    content: "blablabla"
}

describe("Post tests", () => {
    test("Tests get all posts", async () => {
        const response = await request(app).get("/posts");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(0);
    });
    test("Tests create a post", async () => {
        const response = await request(app).post("/posts").send(test_post);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(test_post.title);
        expect(response.body.content).toBe(test_post.content);
        expect(response.body.owner).toBe(test_post.owner);
        post_id = response.body._id;
    });
    test("Tests get all posts after adding one", async () => {
        const response = await request(app).get("/posts");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
    });
    test("Tests get all posts by owner", async () => {
        const response = await request(app).get("/posts?owner="+test_post.owner);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].owner).toBe(test_post.owner);
    });
    test("Tests get all posts by id", async () => {
        const response = await request(app).get("/posts/"+post_id);
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toBe(post_id);
    });
});