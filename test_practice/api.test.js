const axios = require("axios");

describe("Test suite1", () => {
  test("Get all posts list", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    );
  });

  test("Get all albums list", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toHaveLength(100);
    expect(response.data[10].id).toBe(11);
    expect(response.data[99].title).toBe("enim repellat iste");
  });

  test("Get all users list", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data).toHaveLength(10);
    expect(response.data[0].name).toBe("Leanne Graham");
    expect(response.data[9].phone).toBe("024-648-3804");
  });

  test("Get all post 1 comments", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data[0].email).toBe("Eliseo@gardner.biz");
  });

  test("User can make a post successfully", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        id: 12,
        name: "Olha Hubarieva",
        username: "OH",
        email: "oh@gig.biz",
        address: {
          street: "Noname Str",
          suite: "Apt. 1",
          city: "Lviv",
          zipcode: "1111",
          geo: {
            lat: "-37.3333",
            lng: "81.1488",
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(201);
  });
