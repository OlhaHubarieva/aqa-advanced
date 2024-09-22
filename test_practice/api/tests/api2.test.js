const axios = require("axios");
const PostsController = require("../src/controllers/PostsController");
const postsList = require("../src/testData/posts");
const { faker } = require('@faker-js/faker');
const AlbumsController = require("../src/controllers/AlbumsController");
const UsersController = require("../src/controllers/UsersController");
const CommentsController = require("../src/controllers/CommentsController");

describe("Test suite1", () => {
  test("Get all posts list", async () => {
    const response = await PostsController.getAllPosts();
    expect(response.status).toEqual(200);
    expect(response.data[0].title).toBe(postsList[0].title
    );
  });

  test("Get all albums list", async () => {
    const response = await AlbumsController.getAllAlbums();
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toHaveLength(100);
    expect(response.data[10].id).toBe(11);
    expect(response.data[99].title).toBe("enim repellat iste");
  });

  test("Get all users list", async () => {
    const response = await UsersController.getAllUsers();
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toHaveLength(10);
    expect(response.data[0].name).toBe("Leanne Graham");
    expect(response.data[9].phone).toBe("024-648-3804");
  });

  test("Get all post 1 comments", async () => {
    const response = await CommentsController.getAllComments();
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].email).toBe("Eliseo@gardner.biz");
  });

  test("User can make a post successfully", async () => {

    const id = faker.string.uuid();
    const name = faker.name.fullName();
    const userName = faker.internet.userName();
    const email = faker.internet.email();
    const address = {
      street: faker.location.streetAddress(),
      suite: faker.location.secondaryAddress(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      geo: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
    };
    const response = await PostsController.addPost(id, name, userName, email, address);
    expect(response.status).toEqual(201);
  });
});